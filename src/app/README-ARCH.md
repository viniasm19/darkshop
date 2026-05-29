# Arquitetura (resumo)

Este projeto organiza UI e responsabilidades seguindo práticas modernas do Angular:

- `pages/`: componentes de rotas (páginas).
- `components/`: componentes reutilizáveis.
- `services/`: integrações e lógica de domínio (ex.: carrinho, autenticação).
- `models/`: tipos compartilhados (interfaces).
- `interfaces/`: contratos (se necessário).
- `core/`: providers/singletons e infraestrutura (se necessário).
- `shared/`: utilitários reutilizáveis.

> Observação: nesta etapa não foi feita uma reorganização física completa de pastas, mas os tipos duplicados foram centralizados em `src/app/models/` para melhorar escalabilidade.

