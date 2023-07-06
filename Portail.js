//dans un fichier externe comme celui-ci, le code n'a pas à commencer par <script>

function MM_validateForm() { //v4.0
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { nm=val.name; if ((val=val.value)!="") {
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) errors+='- '+nm+' doit contenir une adresse courriel valide.\n';
        } else if (test!='R') { num = parseFloat(val);
          if (isNaN(val)) errors+='- '+nm+' doit contenir un nombre.\n';
          if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' doit contenir un nombre entre '+min+' et '+max+'.\n';
      } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' est requis.\n'; }
    } if (errors) alert('Les erreurs suivantes sont survenues:\n'+errors);
    document.MM_returnValue = (errors == '');
} }
    
function ajouter_ligne() {
            var table = document.getElementById('Evenements');
            var nb = table.rows.length;
            var derniereRangee = table.rows[nb - 1];
            var row = table.insertRow(nb);
            row.innerHTML = derniereRangee.innerHTML
        }

function supprimer_ligne() {
            var nb = document.getElementById('Evenements').rows.length;
            if (nb != 1) {
                document.getElementById("Evenements").deleteRow(nb - 1);
            }
        }