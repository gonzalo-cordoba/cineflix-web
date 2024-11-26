export default function MapEmbed() {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.674798984525!2d-58.40987243421722!3d-34.587094275517096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca83d2aa1521%3A0xc7a941fe0d021ba0!2sAlto%20Palermo%20Shopping!5e0!3m2!1ses!2sar!4v1730221132352!5m2!1ses!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del Cine"
      ></iframe>
    </div>
  );
}
