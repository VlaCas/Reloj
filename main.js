let reloj = setInterval(() => {tiempo = new Date; document.getElementById("reloj").innerHTML = `Tiempo: ${tiempo.toLocaleString()}` + `:${tiempo.getMilliseconds()}`;}, 0001);