
function calculate()
            {
               var name = document.getElementById("nme").value;
               var p = parseFloat($("#PA").val());
               var n = parseFloat($("#dp").val());
               var r = parseFloat($("#IR").val());
               var result = multiplication(p,n,r)/100;
              parseFloat($("#result").html(result));
              document.getElementById("nme1").innerHTML = "Total Interest Amount=";
            }
            function multiplication(i, j, k)
            {
                return i*j*k;
            }


            