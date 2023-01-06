const churchData = [
    { _id: 2, name: 'ICE Betel' },
    { _id: 4, name: 'ICE Boas Novas' },
    { _id: 5, name: 'ICE em Ceilândia' },
    { _id: 6, name: 'ICE Maracanã' },
    { _id: 7, name: 'ICE Manancial' },
    { _id: 8, name: 'ICE Sobradinho' },
    { _id: 9, name: 'ICE Núcleo Bandeirante' },
    { _id: 10, name: 'ICE Nova Vida' },
    { _id: 11, name: 'ICE Gama' },
    { _id: 12, name: 'ICE Ceres' },
    { _id: 13, name: 'ICE Jaraguá' },
    { _id: 14, name: 'ICE Águas Claras' },
    { _id: 15, name: 'ICE Betesda' },
    { _id: 16, name: 'ICE Ebenézer' },
    { _id: 17, name: 'ICE Samambaia' },
    { _id: 18, name: 'ICE Maranata' },
    { _id: 19, name: 'ICE Resgate' },
    { _id: 20, name: 'ICE Samambaia' },
    { _id: 21, name: 'ICE Shalom' },
    { _id: 22, name: 'ICE Xique-Xique' },
    { _id: 23, name: 'ICE Algodoal' },
    { _id: 24, name: 'ICE Catalão' },
    { _id: 25, name: 'ICE de Catalão' },
    { _id: 26, name: 'ICE Central de Goiânia' },
    { _id: 27, name: 'ICE Cristianópolis' },
    { _id: 28, name: 'ICE Ebenézer' },
    { _id: 29, name: 'ICE Jd. Balneário Meia Ponte' },
    { _id: 30, name: 'ICE Setor Oeste' },
    { _id: 31, name: 'ICE Águas Lindas' },
    { _id: 32, name: 'ICE Jardim das Oliveiras' },
    { _id: 33, name: 'ICE Posse' },
    { _id: 34, name: 'ICE Brasília' },
    { _id: 35, name: 'ICE Canaã' },
    { _id: 36, name: 'ICE Adonai' },
    { _id: 37, name: 'ICE Abolição' },
    { _id: 38, name: 'ICE Alto da Pelonha' },
    { _id: 39, name: 'ICE Calvário' },
    { _id: 40, name: 'ICE Carlito Pamplona' },
    { _id: 41, name: 'ICE Crateús' },
    { _id: 42, name: 'ICE Fortaleza' },
    { _id: 43, name: 'ICE Gover.Dix-Sept Rosado' },
    { _id: 44, name: 'ICE João Pessoa' },
    { _id: 45, name: 'ICE Mossoró' },
    { _id: 46, name: '2ª ICE Mossoró' },
    { _id: 47, name: 'ICE Natal' },
    { _id: 48, name: 'ICE Nova Vida' },
    { _id: 49, name: 'ICE Novo Iguape' },
    { _id: 50, name: 'ICE Purgas de Leite' },
    { _id: 51, name: 'ICE Recife' },
    { _id: 52, name: 'ICE Sitio Pilões' },
    { _id: 53, name: 'ICE Vingt-Rosado' },
    { _id: 54, name: 'ICE Araguari' },
    { _id: 55, name: 'ICE Ananindeua' },
    { _id: 56, name: 'ICE Comunidade Anjos' },
    { _id: 57, name: 'ICE Colares' },
    { _id: 58, name: 'ICE Angélica' },
    { _id: 59, name: 'ICE Angélica II' },
    { _id: 60, name: 'ICE Esperança' },
    { _id: 61, name: 'ICE Esperança Viva' },
    { _id: 62, name: 'ICE Eterna Aliança' },
    { _id: 63, name: 'ICE Fazenda Arapuca' },
    { _id: 64, name: 'ICE Hidrolândia' },
    { _id: 65, name: 'ICE Bom Jardim' },
    { _id: 66, name: 'ICE Itumbiara' },
    { _id: 67, name: 'ICE Icuí' },
    { _id: 68, name: 'ICE Jd. Bela Vista' },
    { _id: 69, name: 'ICE Jd. Bela Vista' },
    { _id: 70, name: 'ICE Jd. Guanabara' },
    { _id: 71, name: 'ICE Jd. Novo Mundo' },
    { _id: 72, name: 'ICE Jd. Romano II' },
    { _id: 73, name: 'ICE Morada do Morro' },
    { _id: 74, name: 'ICE Morrinhos' },
    { _id: 75, name: 'ICE Morro da Saudade' },
    { _id: 76, name: 'ICE Piracanjuba' },
    { _id: 77, name: 'ICE Pontalina' },
    { _id: 78, name: 'ICE Pontal Norte' },
    { _id: 79, name: 'ICE Redenção' },
    { _id: 80, name: 'ICE Riviera' },
    { _id: 81, name: 'ICE São Miguel do Passa Quatro' },
    { _id: 82, name: 'ICE Senador Canedo' },
    { _id: 83, name: 'ICE Ramal Itauaçu' },
    { _id: 84, name: 'ICE Setor Pedro Ludovico' },
    { _id: 85, name: 'ICE Uberlândia' },
    { _id: 86, name: 'ICE Vida Nova' },
    { _id: 87, name: 'ICE Vila Concórdia' },
    { _id: 88, name: 'ICE Vila Morais' },
    { _id: 89, name: 'ICE Araputanga' },
    { _id: 90, name: 'ICE Barra do Garças' },
    { _id: 91, name: 'ICE Ebenézer' },
    { _id: 92, name: 'ICE Lucas do Rio Verde' },
    { _id: 93, name: 'ICE Maranatha' },
    { _id: 94, name: 'ICE Betel' },
    { _id: 95, name: 'ICE Curva do S' },
    { _id: 96, name: 'ICE Floresta do Piauí' },
    { _id: 97, name: 'ICE Florianópolis' },
    { _id: 98, name: 'ICE Francisco Morato' },
    { _id: 99, name: 'ICE União' },
    { _id: 100, name: 'ICE Trindade' },
    { _id: 101, name: 'ICE Anápolis' },
    { _id: 102, name: 'ICE Canaã' },
    { _id: 103, name: 'ICE Vicente Pires' },
    { _id: 104, name: 'ICE Guará' },
    { _id: 105, name: 'ICE Planaltina de Goiás' },
    { _id: 106, name: 'ICE Boas Novas (Recanto)' },
    { _id: 107, name: 'ICE Mandaqui' },
    { _id: 108, name: 'ICE Açailândia' },
    { _id: 109, name: 'ICE Canaã' },
    { _id: 110, name: 'ICE Cruzeiro do Sul (Povoado Quatro Boca' },
    { _id: 111, name: 'ICE ELDORADO DOS CARAJÁS' },
    { _id: 112, name: 'ICE Elohim' },
    { _id: 113, name: 'ICE Emanuel' },
    { _id: 114, name: 'ICE Fazenda Arco Íris' },
    { _id: 115, name: 'ICE Maranatha' },
    { _id: 116, name: 'ICE Nova Canaã' },
    { _id: 117, name: 'ICE Rio Maria' },
    { _id: 118, name: 'ICE São Geraldo do Araguaia' },
    { _id: 119, name: 'ICE Shekinah' },
    { _id: 120, name: 'ICE Vila Nova' },
    { _id: 121, name: 'ICE Xinguara' },
    { _id: 122, name: 'ICE Araçatuba' },
    { _id: 123, name: 'ICE Atibaia' },
    { _id: 124, name: 'ICE Bosque dos Eucaliptos' },
    { _id: 125, name: 'ICE Bragança Paulista' },
    { _id: 126, name: 'ICE Brejal' },
    { _id: 127, name: 'ICE Caçapava' },
    { _id: 128, name: 'ICE Campo Grande' },
    { _id: 129, name: 'ICE Canto do Mar' },
    { _id: 130, name: 'ICE Caranda Bosque' },
    { _id: 131, name: 'ICE Ebenezer' },
    { _id: 132, name: 'ICE Guararapes' },
    { _id: 133, name: 'ICE Guararema' },
    { _id: 134, name: 'ICE Guaratinguetá' },
    { _id: 135, name: 'ICE Jacareí' },
    { _id: 136, name: 'ICE Jardim Aeroporto' },
    { _id: 137, name: 'ICE Jardim Cruzeiro do Sul' },
    { _id: 138, name: 'ICE Jardim das Cerejeiras' },
    { _id: 139, name: 'ICE Jardim da Granja' },
    { _id: 140, name: 'ICE Jardim das Indústrias em Jacareí' },
    { _id: 141, name: 'ICE Jardim das Indústrias' },
    { _id: 142, name: 'ICE Jardim Imperial' },
    { _id: 143, name: 'ICE Jardim Maringá' },
    { _id: 144, name: 'ICE Jardim Vale do Sol' },
    { _id: 145, name: 'ICE Monte Castelo' },
    { _id: 146, name: 'ICE Nazaré Paulista' },
    { _id: 147, name: 'ICE Pindamonhangaba' },
    { _id: 148, name: 'ICE Quatá' },
    { _id: 149, name: 'ICE Queirós' },
    { _id: 150, name: 'ICE Residencial Galo Branco' },
    { _id: 151, name: 'ICE Residencial Jatobá' },
    { _id: 152, name: 'ICE Tuiuti' },
    { _id: 153, name: 'ICE Santana do Paraíba' },
    { _id: 154, name: 'ICE São J. da Coroa Grande' },
    { _id: 155, name: 'ICE São José dos Campos' },
    { _id: 156, name: 'ICE Taubaté' },
    { _id: 157, name: 'ICE Tupã' },
    { _id: 158, name: 'ICE Vila Ester' },
    { _id: 159, name: 'ICE Vila Industrial' },
    { _id: 160, name: 'ICE Vila Rossi' },
    { _id: 161, name: 'ICE Anicuns' },
    { _id: 162, name: 'ICE Assentamento Itapira' },
    { _id: 163, name: 'ICE Betânia' },
    { _id: 164, name: 'ICE Diorama' },
    { _id: 165, name: 'ICE Firminópolis' },
    { _id: 166, name: 'ICE Goiás' },
    { _id: 167, name: 'ICE Iporá' },
    { _id: 168, name: 'ICE Itaberaí' },
    { _id: 169, name: 'ICE Itapirapuã' },
    { _id: 170, name: 'ICE Jaupaci' },
    { _id: 171, name: 'ICE Jussara' },
    { _id: 172, name: 'ICE Mata de São Manoel' },
    { _id: 173, name: 'ICE Moiporá' },
    { _id: 174, name: 'ICE Montes Claros' },
    { _id: 175, name: 'ICE Novo Brasil' },
    { _id: 176, name: 'ICE Novo Goiás' },
    { _id: 177, name: 'ICE Novo São Joaquim' },
    { _id: 178, name: 'ICE Pouso Molhado' },
    { _id: 179, name: 'ICE Sanclerlândia' },
    { _id: 180, name: 'ICE São Luís dos Montes Belos' },
    { _id: 181, name: 'ICE Turvania' },
    { _id: 182, name: 'ICE Nova Vida' },
    { _id: 183, name: 'ICE Vila Quininha' },
    { _id: 184, name: 'ICE Alexandrina' },
    { _id: 185, name: '2ª ICE Anápolis' },
    { _id: 186, name: 'ICE Bairro de Lourdes' },
    { _id: 187, name: 'ICE Boas Novas' },
    { _id: 188, name: 'ICE Leopoldo Bulhões' },
    { _id: 189, name: 'ICE Cocalzinho' },
    { _id: 190, name: 'ICE Nerópolis' },
    { _id: 191, name: 'ICE Petrolina' },
    { _id: 192, name: 'ICE Pirenópolis' },
    { _id: 193, name: 'ICE Boa Vista' },
    { _id: 194, name: 'ICE Eldorado' },
    { _id: 195, name: 'ICE Jaiara' },
    { _id: 196, name: 'ICE Jardim Arco Verde' },
    { _id: 197, name: 'ICE Paraíso' },
    { _id: 198, name: 'ICE Parque dos Pirineus' },
    { _id: 199, name: 'ICE Parque Iracema' },
    { _id: 200, name: 'ICE Vila Norte' },
    { _id: 201, name: 'ICE Residencial América' },
    { _id: 202, name: 'ICE Campos Verdes' },
    { _id: 203, name: 'ICE Cruzeiro' },
    { _id: 204, name: 'ICE Itapaci' },
    { _id: 205, name: 'ICE Jardim Sorriso II' },
    { _id: 206, name: 'ICE Minaçu' },
    { _id: 207, name: 'ICE Nova Glória' },
    { _id: 208, name: 'ICE Novo Planalto' },
    { _id: 209, name: 'ICE Pilar' },
    { _id: 210, name: 'ICE Porangatu' },
    { _id: 211, name: 'ICE Rialma' },
    { _id: 212, name: 'ICE Sta. Terezinha' },
    { _id: 213, name: 'ICE Uruaçu' },
    { _id: 214, name: 'ICE Vista Alegre' },
    { _id: 215, name: 'ICE Franco da Rocha' },
    { _id: 216, name: 'ICE Guarapuava' },
    { _id: 217, name: 'ICE Praia Grande' },
    { _id: 218, name: 'ICE Interlagos' },
    { _id: 219, name: 'ICE Jabaquara' },
    { _id: 220, name: 'ICE Jd. Clarice' },
    { _id: 221, name: 'ICE Jd. Gonzaga' },
    { _id: 222, name: 'ICE Jd. Peri' },
    { _id: 223, name: 'ICE Lauzane Paulista' },
    { _id: 224, name: 'ICE Nova Vida' },
    { _id: 225, name: 'ICE Pq. das Nações' },
    { _id: 226, name: 'IC Paulistana' },
    { _id: 227, name: 'ICE Vila das Mercês' },
    { _id: 228, name: 'ICE Vila Santa Isabel' },
    { _id: 229, name: 'ICE Vila Antártica' },
    { _id: 230, name: 'ICE Alphaville' },
    { _id: 231, name: 'ICE Bairro da Vitória' },
    { _id: 232, name: 'ICE Campinas' },
    { _id: 233, name: 'ICE Capuava' },
    { _id: 234, name: 'ICE Cidade Jardim' },
    { _id: 235, name: 'ICE da Graça' },
    { _id: 236, name: 'ICE Jardim América' },
    { _id: 237, name: 'ICE Morada do Sol' },
    { _id: 238, name: 'ICE Nova Esperança' },
    { _id: 239, name: 'ICE Novo Horizonte' },
    { _id: 240, name: 'ICE Parque Amazônia' },
    { _id: 241, name: 'ICE Parque João Braz' },
    { _id: 242, name: 'ICE Parque Tremendão' },
    { _id: 243, name: 'ICE Plenitude' },
    { _id: 244, name: 'ICE Setor Rio Formoso' },
    { _id: 245, name: 'ICE Vila Mutirão' },
    { _id: 246, name: 'ICE Cruzeiro do Sul' },
    { _id: 247, name: 'ICE Garavelo' },
    { _id: 248, name: 'ICE Guapó' },
    { _id: 249, name: 'ICE Jardim Imperial II' },
    { _id: 250, name: 'ICE Jataí' },
    { _id: 251, name: 'ICE Parque das Nações' },
    { _id: 252, name: 'ICE Palmeiras' },
    { _id: 253, name: 'ICE Rio Verde' },
    { _id: 254, name: 'ICE Edéia' },
    { _id: 255, name: 'ICE Edealina' },
    { _id: 256, name: 'ICE Cezarina' },
    { _id: 257, name: 'ICE Betesda' },
    { _id: 258, name: 'ICE Ebenezer' },
    { _id: 259, name: 'ICE Jerusalém' },
    { _id: 260, name: 'ICE Peniel' },
    { _id: 261, name: 'ICE Miracema' },
    { _id: 262, name: 'ICE Paraiso' },
    { _id: 263, name: 'ICE Nova Vida' },
    { _id: 264, name: 'ICE Gurupi' },
    { _id: 265, name: 'ICE Palmas' },
    { _id: 266, name: 'ICE II de Palmas' },
    { _id: 267, name: 'ICE Metropolitana de Palmas' },
    { _id: 268, name: 'ICE Acreúna' },
    { _id: 269, name: 'ICE Aragarças' },
    { _id: 270, name: 'ICE Bocaina' },
    { _id: 271, name: 'ICE Fazenda Sta. Rita' },
    { _id: 272, name: 'ICE Palminópolis' },
    { _id: 273, name: 'ICE Peniel' },
    { _id: 274, name: 'ICE Nazário' },
    { _id: 275, name: 'ICE Sta.Helena' },
    { _id: 276, name: 'ICE Indiara' },
    { _id: 277, name: 'ICE Maranatha' },
    { _id: 278, name: 'ICE Ouvidor' },
    { _id: 279, name: 'ICE Central de Anápolis' },
    { _id: 280, name: 'ICE Novo Tempo' },
    { _id: 281, name: 'Instituto Cristão Evangélico' },
    { _id: 282, name: 'Ice Fazend Nova' }
];

module.exports = churchData;