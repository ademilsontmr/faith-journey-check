import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "quiz_session_id";

interface QuizSession {
  id: string;
  user_name: string | null;
  user_whatsapp: string | null;
  answers: number[];
  completed_at: string | null;
  paid: boolean;
  payment_id: string | null;
  created_at: string;
  updated_at: string;
}

export function useQuizSession() {
  const [sessionId, setSessionId] = useState<string | null>(() => {
    // Initialize from localStorage synchronously to avoid delay
    return localStorage.getItem(SESSION_KEY);
  });
  const [session, setSession] = useState<QuizSession | null>(null);
  const [loading, setLoading] = useState(false); // Start as false to show UI immediately
  const [error, setError] = useState<string | null>(null);
  const loadedRef = useRef(false);

  // Initialize or restore session - non-blocking
  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    
    const storedSessionId = localStorage.getItem(SESSION_KEY);
    if (storedSessionId) {
      // Load session in background without blocking UI
      loadSession(storedSessionId);
    }
  }, []);

  // Subscribe to realtime updates
  useEffect(() => {
    if (!sessionId) return;

    const channel = supabase
      .channel(`quiz_session_${sessionId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "quiz_sessions",
          filter: `id=eq.${sessionId}`,
        },
        (payload) => {
          console.log("Session updated:", payload.new);
          setSession(payload.new as QuizSession);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const loadSession = async (id: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("quiz_sessions")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      
      if (data) {
        setSession(data as QuizSession);
      } else {
        // Session not found, clear localStorage
        localStorage.removeItem(SESSION_KEY);
        setSessionId(null);
      }
    } catch (err) {
      console.error("Error loading session:", err);
      setError("Erro ao carregar sessão");
    } finally {
      setLoading(false);
    }
  };

  const createSession = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("quiz_sessions")
        .insert({})
        .select()
        .single();

      if (error) throw error;

      const newSession = data as QuizSession;
      localStorage.setItem(SESSION_KEY, newSession.id);
      setSessionId(newSession.id);
      setSession(newSession);
      return newSession;
    } catch (err) {
      console.error("Error creating session:", err);
      setError("Erro ao criar sessão");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateAnswers = useCallback(async (answers: number[]) => {
    if (!sessionId) return false;

    try {
      const { error } = await supabase
        .from("quiz_sessions")
        .update({ answers })
        .eq("id", sessionId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Error updating answers:", err);
      return false;
    }
  }, [sessionId]);

  const updateUserData = useCallback(async (name: string, whatsapp: string) => {
    if (!sessionId) return false;

    try {
      const { error } = await supabase
        .from("quiz_sessions")
        .update({ 
          user_name: name, 
          user_whatsapp: whatsapp,
          completed_at: new Date().toISOString()
        })
        .eq("id", sessionId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Error updating user data:", err);
      return false;
    }
  }, [sessionId]);

  const markAsPaid = useCallback(async () => {
    if (!sessionId) return false;

    try {
      const { error } = await supabase
        .from("quiz_sessions")
        .update({ paid: true })
        .eq("id", sessionId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Error marking as paid:", err);
      return false;
    }
  }, [sessionId]);

  const clearSession = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setSessionId(null);
    setSession(null);
  }, []);

  const refreshSession = useCallback(async () => {
    if (sessionId) {
      await loadSession(sessionId);
    }
  }, [sessionId]);

  return {
    sessionId,
    session,
    loading,
    error,
    createSession,
    updateAnswers,
    updateUserData,
    markAsPaid,
    clearSession,
    refreshSession,
  };
}
