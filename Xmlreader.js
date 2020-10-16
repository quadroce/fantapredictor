

  var Mostra = "";
  var StringaXml =DSO_giocatori.XMLDocument;
  var i;
for (i=0; i<StringaXml.documentElement.childNodes.length; i++) {
    Mostra += "<table bgcolor='#F9F9F9' align='center' width='450' border='1' bordercolor='#CCCCCC'>"
Mostra += "<tr>"
Mostra += "<td colspan='2' style='background-color: #008080;'>"
Mostra += "<font color='#FFFFFF'><b>Amico # " + (i + 1) + "</b></font>"
Mostra += "</td>"
Mostra += "</tr>"
Mostra += "<tr>"
Mostra += "<td width='100'><b>Nome:</b></td>"
Mostra += "<td>" + StringaXml.documentElement.childNodes(i).childNodes(0).text + "</td>"
Mostra += "</tr>"
Mostra += "<tr>"
Mostra += "<td><b>Cognome:</b></td>"
Mostra += "<td>" + StringaXml.documentElement.childNodes(i).childNodes(1).text + "</td>"
Mostra += "</tr>"
Mostra += "<tr>"
Mostra += "<td><b>Telefono:</b></td>"
Mostra += "<td>" + StringaXml.documentElement.childNodes(i).childNodes(2).text + "</td>"
Mostra += "</tr>"
Mostra += "<tr>"

  }
  Stampa.innerHTML = Mostra;
   

