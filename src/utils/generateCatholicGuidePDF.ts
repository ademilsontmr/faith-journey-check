import { jsPDF } from "jspdf";

interface GuideData {
  userName: string;
  score: number;
  levelTitle: string;
}

export const generateCatholicGuidePDF = ({ userName, score, levelTitle }: GuideData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  
  const firstName = userName.split(" ")[0];
  
  // Helper functions
  const centerText = (text: string, y: number, size: number = 12) => {
    doc.setFontSize(size);
    const textWidth = doc.getTextWidth(text);
    doc.text(text, (pageWidth - textWidth) / 2, y);
  };
  
  const addParagraph = (text: string, startY: number, fontSize: number = 11): number => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, startY);
    return startY + lines.length * (fontSize * 0.4);
  };
  
  const addTitle = (text: string, y: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(12, 75, 148); // Marian Blue
    centerText(text, y, 16);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
  };
  
  const addSubtitle = (text: string, y: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(212, 160, 23); // Liturgical Gold
    doc.text(text, margin, y);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    return y + 8;
  };

  const addPageNumber = (pageNum: number) => {
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    centerText(`- ${pageNum} -`, pageHeight - 10, 10);
    doc.setTextColor(0, 0, 0);
  };

  const addFooter = () => {
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    centerText("Guia da Vida Católica | Bom Católico", pageHeight - 18, 8);
    doc.setFontSize(9);
    doc.setTextColor(12, 75, 148);
    centerText("www.bomcatolico.com.br", pageHeight - 10, 9);
    doc.setTextColor(0, 0, 0);
  };

  // ===============================
  // PÁGINA 1 - CAPA
  // ===============================
  doc.setFillColor(12, 75, 148);
  doc.rect(0, 0, pageWidth, 80, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  centerText("GUIA COMPLETO", 35, 28);
  centerText("DA VIDA CATÓLICA", 50, 24);
  doc.setFont("helvetica", "normal");
  centerText("Orações, Devoções e Ensinamentos da Igreja", 65, 12);
  
  doc.setTextColor(0, 0, 0);
  
  // Decorative cross
  doc.setDrawColor(212, 160, 23);
  doc.setLineWidth(3);
  doc.line(pageWidth / 2, 100, pageWidth / 2, 140);
  doc.line(pageWidth / 2 - 15, 115, pageWidth / 2 + 15, 115);
  
  doc.setFontSize(14);
  centerText(`Preparado especialmente para`, 160, 14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(12, 75, 148);
  centerText(userName, 175, 20);
  
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  centerText(`Resultado do Quiz: ${score}%`, 195, 12);
  centerText(`Nível: ${levelTitle}`, 205, 12);
  
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128);
  centerText('"Buscai em primeiro lugar o Reino de Deus"', 230, 11);
  centerText("— Mateus 6,33", 240, 10);
  
  addFooter();
  addPageNumber(1);

  // ===============================
  // PÁGINA 2 - INTRODUÇÃO
  // ===============================
  doc.addPage();
  addTitle("Introdução: O Chamado à Santidade", 30);
  
  let y = 50;
  y = addParagraph(`Querido(a) ${firstName},`, y);
  y += 8;
  
  y = addParagraph(
    "Este Guia foi preparado com muito carinho para ajudá-lo(a) em sua caminhada de fé. A Igreja Católica, fundada por Nosso Senhor Jesus Cristo, é a depositária da plenitude da verdade revelada e dos meios de salvação.",
    y
  );
  y += 10;
  
  y = addParagraph(
    "O Concílio Vaticano II nos lembra que todos os fiéis são chamados à santidade: \"Todos os fiéis de qualquer estado ou condição são chamados à plenitude da vida cristã e à perfeição da caridade\" (Lumen Gentium, 40). Este não é um privilégio de poucos, mas vocação de todos os batizados.",
    y
  );
  y += 10;
  
  y = addParagraph(
    "Neste guia você encontrará: orações fundamentais da tradição católica, explicações sobre os Sacramentos, devoções marianas, práticas de piedade, e orientações para crescer na vida espiritual. Tudo fundamentado no Catecismo da Igreja Católica e na Sagrada Tradição.",
    y
  );
  y += 10;
  
  y = addSubtitle("Como usar este Guia", y);
  y = addParagraph(
    "• Reserve um momento do dia para a leitura e oração\n• Não tenha pressa - assimile cada ensinamento\n• Pratique as orações diariamente\n• Busque a confissão e a Eucaristia com frequência\n• Peça a intercessão de Nossa Senhora",
    y
  );
  y += 10;
  
  y = addParagraph(
    "\"A oração é a elevação da alma a Deus ou o pedido a Deus dos bens convenientes\" (São João Damasceno). Que este guia seja instrumento de graça em sua vida.",
    y
  );
  
  addFooter();
  addPageNumber(2);

  // ===============================
  // PÁGINA 3 - ORAÇÕES FUNDAMENTAIS
  // ===============================
  doc.addPage();
  addTitle("Orações Fundamentais do Católico", 30);
  
  y = 45;
  y = addSubtitle("Sinal da Cruz", y);
  y = addParagraph(
    "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
    y
  );
  y += 5;
  y = addParagraph(
    "O Sinal da Cruz é a primeira oração que aprendemos e a marca distintiva do cristão. Fazendo-o, professamos a fé na Santíssima Trindade e recordamos a Paixão de Cristo.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("Pai-Nosso", y);
  y = addParagraph(
    "Pai nosso que estais no Céu, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.",
    y
  );
  y += 5;
  y = addParagraph(
    "Esta oração foi ensinada pelo próprio Jesus aos Apóstolos. É chamada \"Oração do Senhor\" e contém todas as petições necessárias à nossa salvação.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("Ave-Maria", y);
  y = addParagraph(
    "Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
    y
  );
  y += 5;
  y = addParagraph(
    "A primeira parte é a saudação do Arcanjo Gabriel e de Santa Isabel a Maria. A segunda é a súplica da Igreja à Mãe de Deus.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("Glória ao Pai", y);
  y = addParagraph(
    "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
    y
  );
  
  y += 8;
  y = addSubtitle("Credo Apostólico", y);
  y = addParagraph(
    "Creio em Deus Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos Céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
    y, 10
  );
  
  addFooter();
  addPageNumber(3);

  // ===============================
  // PÁGINA 4 - OS SETE SACRAMENTOS
  // ===============================
  doc.addPage();
  addTitle("Os Sete Sacramentos da Igreja", 30);
  
  y = 45;
  y = addParagraph(
    "Os Sacramentos são sinais sensíveis e eficazes da graça, instituídos por Cristo e confiados à Igreja. Através deles, a vida divina nos é comunicada. São sete os Sacramentos:",
    y
  );
  y += 10;
  
  y = addSubtitle("1. Batismo", y);
  y = addParagraph(
    "Porta de entrada na vida cristã. Pelo Batismo somos libertos do pecado original, renascemos como filhos de Deus e nos tornamos membros da Igreja. \"Quem crer e for batizado será salvo\" (Mc 16,16).",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("2. Crisma (Confirmação)", y);
  y = addParagraph(
    "Sacramento que completa o Batismo e nos confere o Espírito Santo de modo especial, fortalecendo-nos para sermos testemunhas de Cristo. Recebemos os sete dons do Espírito Santo.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("3. Eucaristia", y);
  y = addParagraph(
    "\"Fonte e cume de toda a vida cristã\" (LG 11). Na Eucaristia, recebemos o próprio Corpo e Sangue de Cristo sob as espécies do pão e do vinho. É o Sacramento do Amor.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("4. Penitência (Confissão)", y);
  y = addParagraph(
    "Sacramento da reconciliação com Deus e com a Igreja. Através da confissão sincera e da absolvição do sacerdote, nossos pecados são perdoados. \"A quem perdoardes os pecados, serão perdoados\" (Jo 20,23).",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("5. Unção dos Enfermos", y);
  y = addParagraph(
    "Sacramento que confere graça especial aos fiéis que enfrentam doença grave ou velhice. Fortalece a alma e pode trazer a cura do corpo, se for da vontade de Deus.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("6. Ordem", y);
  y = addParagraph(
    "Sacramento pelo qual homens são ordenados bispos, presbíteros ou diáconos, recebendo poder sagrado para exercer o ministério em nome de Cristo.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("7. Matrimônio", y);
  y = addParagraph(
    "Sacramento que une homem e mulher em aliança indissolúvel, tornando-os cooperadores de Deus na transmissão da vida. \"O que Deus uniu, o homem não separe\" (Mt 19,6).",
    y, 10
  );
  
  addFooter();
  addPageNumber(4);

  // ===============================
  // PÁGINA 5 - DEVOÇÃO A NOSSA SENHORA
  // ===============================
  doc.addPage();
  addTitle("Devoção a Nossa Senhora", 30);
  
  y = 45;
  y = addParagraph(
    "A Virgem Maria ocupa lugar central na fé católica. Ela é Mãe de Deus (Theotókos), Mãe da Igreja e nossa Mãe espiritual. Jesus, do alto da Cruz, entregou-a a nós: \"Eis aí tua Mãe\" (Jo 19,27).",
    y
  );
  y += 10;
  
  y = addSubtitle("Os Dogmas Marianos", y);
  y = addParagraph(
    "• Maternidade Divina: Maria é verdadeiramente Mãe de Deus\n• Virgindade Perpétua: Maria foi virgem antes, durante e depois do parto\n• Imaculada Conceição: Maria foi preservada do pecado original\n• Assunção: Maria foi elevada ao Céu em corpo e alma",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("O Santo Rosário", y);
  y = addParagraph(
    "O Rosário é a oração mais recomendada pela Igreja para honrar Nossa Senhora. São Pio de Pietrelcina dizia: \"O Rosário é a arma destes tempos\". Ele consiste na meditação dos mistérios da vida de Cristo e de Maria.",
    y
  );
  y += 8;
  
  y = addParagraph(
    "MISTÉRIOS GOZOSOS (segunda e sábado):\n1. Anunciação do Anjo a Maria\n2. Visitação de Maria a Isabel\n3. Nascimento de Jesus\n4. Apresentação de Jesus no Templo\n5. Encontro de Jesus no Templo",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "MISTÉRIOS DOLOROSOS (terça e sexta):\n1. Agonia de Jesus no Horto\n2. Flagelação de Jesus\n3. Coroação de Espinhos\n4. Jesus carrega a Cruz\n5. Crucificação e Morte de Jesus",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "MISTÉRIOS GLORIOSOS (quarta e domingo):\n1. Ressurreição de Jesus\n2. Ascensão de Jesus ao Céu\n3. Vinda do Espírito Santo\n4. Assunção de Nossa Senhora\n5. Coroação de Maria como Rainha",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "MISTÉRIOS LUMINOSOS (quinta):\n1. Batismo de Jesus no Jordão\n2. Bodas de Caná\n3. Anúncio do Reino de Deus\n4. Transfiguração de Jesus\n5. Instituição da Eucaristia",
    y, 10
  );
  
  addFooter();
  addPageNumber(5);

  // ===============================
  // PÁGINA 6 - A SANTA MISSA
  // ===============================
  doc.addPage();
  addTitle("A Santa Missa: Fonte e Cume", 30);
  
  y = 45;
  y = addParagraph(
    "A Santa Missa é a renovação incruenta do Sacrifício de Cristo no Calvário. Nela, Jesus se oferece ao Pai pelas mãos do sacerdote para nossa salvação. O Concílio Vaticano II ensina que a Eucaristia é \"fonte e cume de toda a vida cristã\" (Lumen Gentium, 11).",
    y
  );
  y += 10;
  
  y = addSubtitle("Estrutura da Missa", y);
  y = addParagraph(
    "RITOS INICIAIS:\n• Entrada e Saudação\n• Ato Penitencial (Confiteor)\n• Glória (domingos e festas)\n• Oração Coleta",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "LITURGIA DA PALAVRA:\n• Primeira Leitura (Antigo Testamento)\n• Salmo Responsorial\n• Segunda Leitura (Epístolas)\n• Aclamação ao Evangelho (Aleluia)\n• Evangelho\n• Homilia\n• Profissão de Fé (Credo)\n• Oração dos Fiéis",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "LITURGIA EUCARÍSTICA:\n• Ofertório (apresentação dos dons)\n• Oração sobre as Oferendas\n• Prefácio e Santo\n• Oração Eucarística (Consagração)\n• Pai-Nosso\n• Rito da Paz\n• Fração do Pão (Cordeiro de Deus)\n• Comunhão",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "RITOS FINAIS:\n• Avisos\n• Bênção Final\n• Despedida",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Disposições para a Comunhão", y);
  y = addParagraph(
    "Para comungar dignamente é preciso:\n• Estar em estado de graça (sem pecado mortal)\n• Observar o jejum eucarístico de 1 hora\n• Ter reta intenção e devoção",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "São Pio de Pietrelcina afirmava: \"Seria mais fácil a terra existir sem o sol do que sem a Santa Missa\". Não deixe de participar ao menos todo domingo e dias santos de guarda.",
    y
  );
  
  addFooter();
  addPageNumber(6);

  // ===============================
  // PÁGINA 7 - CONFISSÃO
  // ===============================
  doc.addPage();
  addTitle("O Sacramento da Confissão", 30);
  
  y = 45;
  y = addParagraph(
    "\"Recebei o Espírito Santo. A quem perdoardes os pecados, serão perdoados\" (Jo 20,22-23). Jesus instituiu o Sacramento da Confissão para que, mesmo após o Batismo, possamos obter o perdão dos pecados cometidos.",
    y
  );
  y += 10;
  
  y = addSubtitle("Como fazer uma boa Confissão", y);
  y = addParagraph(
    "1. EXAME DE CONSCIÊNCIA: Antes da confissão, examine sua consciência à luz dos Dez Mandamentos e dos preceitos da Igreja. Peça ao Espírito Santo que ilumine sua memória.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "2. ARREPENDIMENTO: Tenha dor sincera pelos pecados cometidos, não apenas por medo do castigo, mas por ter ofendido a Deus que é infinitamente bom.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "3. PROPÓSITO DE EMENDA: Tenha firme intenção de não mais pecar e de evitar as ocasiões de pecado.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "4. CONFISSÃO: Declare todos os pecados mortais ao sacerdote, em número, espécie e circunstâncias que mudem a natureza do pecado.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "5. PENITÊNCIA: Cumpra a penitência dada pelo confessor como reparação pelos pecados.",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Ato de Contrição", y);
  y = addParagraph(
    "Meu Deus, eu me arrependo de todo o coração de Vos ter ofendido, porque sois infinitamente bom e amável, e o pecado Vos desagrada. Proponho firmemente, com o auxílio da Vossa graça, fazer penitência, não mais pecar e evitar as ocasiões de pecado. Amém.",
    y
  );
  y += 10;
  
  y = addSubtitle("Os Dez Mandamentos", y);
  y = addParagraph(
    "1º Amar a Deus sobre todas as coisas\n2º Não tomar Seu santo Nome em vão\n3º Guardar domingos e festas de guarda\n4º Honrar pai e mãe\n5º Não matar\n6º Não pecar contra a castidade\n7º Não furtar\n8º Não levantar falso testemunho\n9º Não desejar a mulher do próximo\n10º Não cobiçar as coisas alheias",
    y, 10
  );
  
  addFooter();
  addPageNumber(7);

  // ===============================
  // PÁGINA 8 - VIDA DE ORAÇÃO
  // ===============================
  doc.addPage();
  addTitle("Vida de Oração", 30);
  
  y = 45;
  y = addParagraph(
    "\"Orai sem cessar\" (1Ts 5,17). A oração é o respirar da alma cristã. Sem oração, a vida espiritual definha. Santa Teresa de Ávila ensinava que \"a oração é um trato de amizade com Deus\".",
    y
  );
  y += 10;
  
  y = addSubtitle("Oração da Manhã", y);
  y = addParagraph(
    "Meu Deus, eu Vos adoro e Vos amo de todo o meu coração. Agradeço-Vos por me terdes criado, feito cristão e conservado nesta noite. Ofereço-Vos as ações do dia de hoje; fazei que sejam todas segundo a Vossa santa vontade e para maior glória Vossa. Preservai-me do pecado e de todo o mal. A Vossa graça esteja sempre comigo e com todos os meus. Amém.",
    y
  );
  y += 10;
  
  y = addSubtitle("Oração da Noite", y);
  y = addParagraph(
    "Meu Deus, eu Vos agradeço por todos os benefícios que de Vós recebi hoje. Peço-Vos perdão pelos pecados que neste dia cometi. Guardai-me durante esta noite e preservai-me de todo o mal. Maria, minha Mãe, amparai-me. Santo Anjo do Senhor, meu zeloso guardador, velai por mim. Amém.",
    y
  );
  y += 10;
  
  y = addSubtitle("O Ângelus", y);
  y = addParagraph(
    "V. O Anjo do Senhor anunciou a Maria.\nR. E Ela concebeu do Espírito Santo. (Ave-Maria)\n\nV. Eis aqui a serva do Senhor.\nR. Faça-se em mim segundo a Vossa palavra. (Ave-Maria)\n\nV. E o Verbo Se fez carne.\nR. E habitou entre nós. (Ave-Maria)\n\nV. Rogai por nós, Santa Mãe de Deus.\nR. Para que sejamos dignos das promessas de Cristo.\n\nOREMOS: Infundi, Senhor, a Vossa graça em nossas almas, para que nós, que pelo anúncio do Anjo conhecemos a Encarnação de Cristo, Vosso Filho, por Sua Paixão e Cruz sejamos levados à glória da ressurreição. Por Cristo, Senhor nosso. Amém.",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Oração a São Miguel Arcanjo", y);
  y = addParagraph(
    "São Miguel Arcanjo, defendei-nos no combate, sede nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, Príncipe da milícia celeste, pelo poder divino, precipitai no inferno a Satanás e aos outros espíritos malignos que andam pelo mundo para perder as almas. Amém.",
    y, 10
  );
  
  addFooter();
  addPageNumber(8);

  // ===============================
  // PÁGINA 9 - OS SANTOS E A COMUNHÃO DOS SANTOS
  // ===============================
  doc.addPage();
  addTitle("Os Santos e a Intercessão", 30);
  
  y = 45;
  y = addParagraph(
    "A Igreja é composta por três partes: a Igreja Militante (nós, na terra), a Igreja Padecente (as almas do Purgatório) e a Igreja Triunfante (os Santos no Céu). Estamos todos unidos no Corpo Místico de Cristo.",
    y
  );
  y += 10;
  
  y = addSubtitle("Por que rezar aos Santos?", y);
  y = addParagraph(
    "Os Santos, por estarem diante de Deus, podem interceder por nós. Como o livro do Apocalipse mostra, eles apresentam nossas orações a Deus (Ap 5,8). Não adoramos os Santos - a adoração é devida somente a Deus - mas os veneramos e pedimos sua intercessão.",
    y
  );
  y += 10;
  
  y = addSubtitle("Alguns Santos Intercessores", y);
  y = addParagraph(
    "• São José: Patrono da Igreja Universal, das famílias e do trabalho\n• Santo Antônio: Causas impossíveis e objetos perdidos\n• Santa Rita: Causas impossíveis\n• São Judas Tadeu: Causas desesperadas\n• Santa Teresinha: Missionários e doentes\n• Padre Pio: Cura e conversão\n• São Francisco de Assis: Ecologia e animais",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Oração a São José", y);
  y = addParagraph(
    "A vós, São José, recorremos na nossa tribulação e, depois de implorar o auxílio de vossa Santíssima Esposa, cheios de confiança solicitamos também o vosso patrocínio. Por esse laço sagrado de caridade que vos uniu à Virgem Imaculada Mãe de Deus, e pelo paternal amor que tivestes ao Menino Jesus, ardentemente vos suplicamos que lanceis um olhar benigno à herança que Jesus Cristo conquistou com o Seu Sangue, e nos socorrais em nossas necessidades com o vosso poder e auxílio.",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Oração ao Anjo da Guarda", y);
  y = addParagraph(
    "Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, guarda, governa e ilumina. Amém.",
    y
  );
  y += 10;
  
  y = addSubtitle("Oração pelas Almas do Purgatório", y);
  y = addParagraph(
    "Senhor, dai-lhes o eterno descanso e brilhe para elas a Vossa luz. Descansem em paz. Amém.\n\nLembrai-vos de rezar pelas almas do Purgatório, especialmente por seus familiares falecidos. A caridade para com os defuntos é obra de grande mérito.",
    y, 10
  );
  
  addFooter();
  addPageNumber(9);

  // ===============================
  // PÁGINA 10 - CONCLUSÃO E PLANO DE VIDA
  // ===============================
  doc.addPage();
  addTitle("Seu Plano de Vida Espiritual", 30);
  
  y = 45;
  y = addParagraph(
    `Querido(a) ${firstName}, ao concluir este Guia, convido você a estabelecer um plano de vida espiritual. A vida cristã não é improviso - requer dedicação e constância. Como dizia São Josemaría Escrivá: "Santidade é fazer bem as coisas de cada dia".`,
    y
  );
  y += 10;
  
  y = addSubtitle("Proposta de Rotina Diária", y);
  y = addParagraph(
    "MANHÃ:\n• Ao acordar: Sinal da Cruz e oferecimento do dia\n• Oração da manhã (5-10 minutos)\n• Leitura espiritual ou Evangelho do dia\n\nAO LONGO DO DIA:\n• Ângelus (6h, 12h, 18h) ou pelo menos ao meio-dia\n• Jaculatórias (pequenas orações ao longo do dia)\n• Exame de consciência rápido antes do almoço\n\nNOITE:\n• Terço (20 minutos)\n• Exame de consciência\n• Oração da noite e Salve-Rainha",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Proposta Semanal", y);
  y = addParagraph(
    "• Domingo: Santa Missa (obrigatória)\n• Ao menos uma Missa durante a semana\n• Confissão: no mínimo mensal, idealmente quinzenal\n• Adoração ao Santíssimo: ao menos 1 hora por semana\n• Leitura espiritual: um livro por mês",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Compromisso Pessoal", y);
  y = addParagraph(
    `Eu, ${userName}, comprometo-me a:\n\n1. Participar da Santa Missa todo domingo\n2. Confessar-me ao menos uma vez por mês\n3. Rezar o Terço diariamente\n4. Fazer exame de consciência toda noite\n5. Crescer no conhecimento da fé católica`,
    y, 10
  );
  y += 10;
  
  // Citação final
  doc.setFillColor(12, 75, 148);
  doc.rect(margin, y, contentWidth, 35, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  const finalQuote = "\"Não tenhais medo! Abri, escancarai as portas a Cristo!\" — São João Paulo II";
  const quoteLines = doc.splitTextToSize(finalQuote, contentWidth - 10);
  doc.text(quoteLines, margin + 5, y + 15);
  
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  
  addFooter();
  addPageNumber(10);

  // Salvar o PDF
  doc.save("Guia-da-Vida-Catolica.pdf");
};
