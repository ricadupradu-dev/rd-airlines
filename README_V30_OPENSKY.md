# RD AIRLINES V30 — OpenSky

V30 mantém o V29 e adiciona radar híbrido com OpenSky + voos virtuais RD AIRLINES.

## Configuração
1. Copie `.env.example` para `.env`.
2. Preencha `OPENSKY_CLIENT_ID` e `OPENSKY_CLIENT_SECRET` com as credenciais OAuth2 do OpenSky.
3. Execute `npm install` e `npm start`.
4. Abra `http://localhost:3000`.

As credenciais ficam somente no servidor e nunca são enviadas ao navegador. O OpenSky usa OAuth2 client credentials e tokens expiram periodicamente.


V30.1 — Segurança operacional (simulação): compatibilidade de pista por aeroporto/modelo, bloqueio de voos RD virtuais incompatíveis e painel METAR/TAF. O METAR/TAF é camada meteorológica; dimensões de pista vêm do cadastro de aeródromos. Link externo: https://metar-taf.com.


V30.2: voos RD e RD AIRLINES-PORTUGAL incompatíveis com pistas curtas são substituídos automaticamente por ATR 72-600 quando a pista comporta 1.200 m ou mais, ou Cessna 208 Caravan quando comporta 900 m ou mais.
