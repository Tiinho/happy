const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserindo daados na tabela
  await saveOrphanage(db, {
    lat: "-12.6986726",
    lng: "-38.325768",
    name: "CamaCity",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social",
    whatsapp: "13247375252",
    images: [
      "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1594925782033-0238ef32fca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horários de visitas das 08h até as 18h",
    open_on_weekends: "0"
  }); 
  //consulta de dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consulta de somente 1 orphanage, pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  /* //deletar um dado ta tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id ="4"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="5"')) */
});
