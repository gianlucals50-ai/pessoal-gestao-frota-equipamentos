/* Dados de exemplo compartilhados pelo protótipo.
   Nada é salvo de verdade — é só para mostrar o layout. */

window.DEMO = {
  // Kit básico obrigatório em todo caminhão
  kit: [
    { id: "macaco",      nome: "Macaco hidráulico",            emoji: "🛠️" },
    { id: "chave_roda",  nome: "Chave de roda",                emoji: "🔧" },
    { id: "extintor",    nome: "Extintor",                     emoji: "🧯" },
    { id: "cabo_forca",  nome: "Cabo de força (chupeta)",      emoji: "🔌" },
    { id: "triangulo",   nome: "Triângulo de sinalização",     emoji: "🔺" },
    { id: "step",        nome: "Estepe (step)",                emoji: "🛞" },
    { id: "parabrisa",   nome: "Para-brisa",                   emoji: "🪟" },
    { id: "retrovisor",  nome: "Retrovisores",                 emoji: "🪞" },
    { id: "faixa_lat",   nome: "Faixas refletivas laterais",   emoji: "🟨" },
    { id: "faixa_para",  nome: "Faixas refletivas do para-choque", emoji: "🟧" },
  ],

  // Caminhões (cavalos mecânicos) da frota
  caminhoes: [
    { placa: "RXA-1B23", modelo: "Scania R450",        carretas: ["SLT-4C55", "SLT-4C56"] },
    { placa: "QPT-9D87", modelo: "Volvo FH 460",       carretas: ["SLT-2A10"] },
    { placa: "RKM-3F41", modelo: "Mercedes Actros",    carretas: ["SLT-8H22", "SLT-8H23"] },
    { placa: "PYB-7G09", modelo: "DAF XF",             carretas: ["SLT-1J77"] },
    { placa: "RTC-5K62", modelo: "Iveco S-Way",        carretas: [] },
  ],

  motoristaAtual: {
    nome: "José da Silva",
    usuario: "jose.silva",
    caminhaoAtual: "QPT-9D87",
  },

  // Trocas recentes que aparecem no painel do administrador
  trocas: [
    {
      id: "T-1042", motorista: "José da Silva", de: "RXA-1B23", para: "QPT-9D87",
      quando: "Hoje, 07:12", status: "novo", problemas: 0,
    },
    {
      id: "T-1041", motorista: "Antônio Pereira", de: "RKM-3F41", para: "PYB-7G09",
      quando: "Hoje, 06:40", status: "problema", problemas: 2,
    },
    {
      id: "T-1040", motorista: "Marcos Souza", de: "PYB-7G09", para: "RTC-5K62",
      quando: "Ontem, 18:05", status: "revisado", problemas: 0,
    },
    {
      id: "T-1039", motorista: "Luiz Gomes", de: "QPT-9D87", para: "RKM-3F41",
      quando: "Ontem, 14:22", status: "revisado", problemas: 1,
    },
    {
      id: "T-1038", motorista: "José da Silva", de: "RTC-5K62", para: "RXA-1B23",
      quando: "Ontem, 08:15", status: "revisado", problemas: 0,
    },
  ],

  motoristas: [
    { nome: "José da Silva",     usuario: "jose.silva",     caminhao: "QPT-9D87" },
    { nome: "Antônio Pereira",   usuario: "antonio.p",      caminhao: "PYB-7G09" },
    { nome: "Marcos Souza",      usuario: "marcos.souza",   caminhao: "RTC-5K62" },
    { nome: "Luiz Gomes",        usuario: "luiz.gomes",     caminhao: "RKM-3F41" },
    { nome: "Pedro Henrique",    usuario: "pedro.h",        caminhao: "—" },
  ],

  notificacoes: [
    { texto: "José da Silva trocou de caminhão: RXA-1B23 → QPT-9D87", quando: "há 5 min" },
    { texto: "Antônio Pereira registrou 2 itens com problema na troca T-1041", quando: "há 37 min" },
    { texto: "Marcos Souza trocou de caminhão: PYB-7G09 → RTC-5K62", quando: "ontem, 18:05" },
  ],
};
