AOS.init();

const dataDoevento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoevento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmms = 1000 * 60;

    const diasAteOevento = Math.floor(distanciaAteOevento / diaEmMS);
    const horasAteOevento = Math.floor((distanciaAteOevento % diaEmMS) / horaEmMs);
    const minutosAteOevento = Math.floor((distanciaAteOevento % horaEmMs) / (minutoEmms));
    const segundosAteOevento = Math.floor((distanciaAteOevento % minutoEmms) / 1000);

    console.log(diasAteOevento);
    console.log(horasAteOevento);
    console.log(minutosAteOevento);
    console.log(segundosAteOevento);

    document.getElementById('contador').innerHTML = `${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`;
}, 1000);

