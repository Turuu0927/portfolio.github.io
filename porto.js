var minuts = document.getElementById('minuts')
            var secunds = document.getElementById('secunds')
            var doils = document.getElementById('doils')
            var minut = 0
            var sec = 0 
            var milsec = 0
            var intervalId = 0
            var q = setInterval(doil, 10)
            var a = clearInterval(q)
            function doil() {
                doils.innerHTML = ":" + milsec
                milsec++
                if(milsec === 100){
                    milsec = 0    
                    sec = ++sec
                    secunds.innerHTML =   sec
                }
                else if(sec == 60){
                    sec = 0
                    minut = ++minut
                    minuts.innerHTML = minut + ":"
                }   
                else if (sec < 10){
                    secunds.innerHTML = "0" + sec
                }
                else if (minut < 10){
                    minuts.innerHTML = "0" + minut + ":"
                }
                clearInterval(q)
            }
            function start(){
                if(intervalId == 0){
                    intervalId = setInterval(doil, 10)
                }
                
            }
            function stop(){
                clearInterval(intervalId)
                intervalId = 0
            }
            function reset(){
                minut = 0
                sec = 0 
                milsec = 0
                doils.innerHTML = "00"
                secunds.innerHTML = "00"
                minuts.innerHTML = "00:" 
            }
            function lap(){
                var p = document.createElement("p")
                p.innerHTML = minuts.innerHTML  + secunds.innerHTML  + doils.innerHTML
                document.getElementById("lap").appendChild(p)
            }
           