# ADS-B e rota por callsign

O endpoint /api/flight-route/:callsign primeiro consulta o callsign no adsb.fi e depois usa o mesmo callsign para buscar origem/destino no ADSBDB. A posição continua vindo do adsb.fi.
