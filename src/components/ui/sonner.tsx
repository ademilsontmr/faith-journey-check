import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-surface group-[.toaster]:text-text group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-text-muted",
          actionButton: "group-[.toast]:bg-button group-[.toast]:text-button-text",
          cancelButton: "group-[.toast]:bg-background-muted group-[.toast]:text-text-muted",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
