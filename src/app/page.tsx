
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza Tus Ventas en 24 Horas" subheadline="Transforma tu negocio con nuestro curso de Ventas Express. Sin anuncios pagados, obtén una web de ventas lista en menos de un día." cta1="Inicia Ahora" />
<How step1Title="Inscríbete al curso" step1Desc="Obtén el Curso de Ventas Express Online." step2Title="Digitaliza tus ventas" step2Desc="Aprende a vender en redes sociales sin anuncios pagados." step3Title="Obtén soporte 24/7" step3Desc="Tenemos el servicio de soporte más rápido del país." />
<Aboutus headline="WebGo: Digitalizando Negocios Locales" subheadline="WebGo transforma pequeñas empresas en gigantes digitales, destacando en ventas online sin complicaciones." beneficiotitulo1="Crecimiento Exponencial" beneficio1="Curso Express, ventas en redes sociales sin anuncios." beneficiotitulo2="Ahorro de Tiempo" beneficio2="Gestiona tu sitio web de manera eficiente y rápida." />
<Services heading="Impulsa Tus Ventas Digitales" description="Curso express que te enseña a vender en redes sociales sin invertir en anuncios pagados. No se requiere experiencia previa ni conocimientos técnicos." services={[{"name":"Estrategias de Venta","icon":"bullseye","description":"Descubre tácticas efectivas para vender más."},{"name":"Canales Digitales","icon":"tablet","description":"Aprovecha las redes sociales para vender."},{"name":"Clientes Potenciales","icon":"users","description":"Atrae y retén a tus clientes ideales."},{"name":"Contenido Atractivo","icon":"video","description":"Crea contenido que engancha y convierte."},{"name":"Optimización SEO","icon":"search","description":"Posiciona tu negocio en los primeros lugares."},{"name":"Soporte 24/7","icon":"life-ring","description":"Siempre listos para ayudarte en tu camino."}]} />
<BeforeAndAfter subheadline="Visualiza la excelencia de nuestros trabajos y productos entregados." />
<Faq faqs={[{"pregunta":"¿Cómo el Curso de Ventas Express de WebGo me ayudará a incrementar mis ventas online?","respuesta":"Nuestro Curso de Ventas Express está especialmente diseñado para dueños de negocios como tú, que buscan digitalizar sus ventas sin tener que recurrir a anuncios pagados. Te enseñaremos cómo maximizar el uso de redes sociales para llegar a más clientes potenciales y convertirlos en compradores. Al final del curso de 3 semanas, tendrás las habilidades necesarias para manejar tu propio canal de ventas online de manera efectiva."},{"pregunta":"¿Necesito tener conocimientos previos en ventas online para tomar el Curso de Ventas Express?","respuesta":"No necesitas ningún conocimiento previo en ventas online para tomar nuestro Curso de Ventas Express. Nosotros te proporcionaremos todas las herramientas y la formación necesaria para que puedas comenzar a vender en redes sociales de manera efectiva."},{"pregunta":"¿Cuál es el precio del Curso de Ventas Express y qué está incluido?","respuesta":"El precio del Curso de Ventas Express es de $120.000 CLP o USD 150. Este precio incluye acceso a todas las lecciones en línea durante 3 semanas, materiales de estudio y asesoramiento directo de nuestros expertos durante todo el curso. Nuestro objetivo es brindarte todo lo que necesitas para empezar a generar ventas online con éxito."},{"pregunta":"¿Cómo puedo gestionar mi tiempo entre mi negocio y el Curso de Ventas Express?","respuesta":"Sabemos que los dueños de pequeños negocios están muy ocupados, por lo que nuestro curso está diseñado para ser flexible. Puedes acceder a las lecciones en cualquier momento, lo que te permite aprender a tu propio ritmo y en los horarios que más te convienen. Además, nuestras estrategias de venta online te ahorrarán tiempo a largo plazo, ya que te permitirán vender de manera más efectiva."},{"pregunta":"¿Por qué debería elegir el Curso de Ventas Express de WebGo en lugar de otros cursos disponibles?","respuesta":"En WebGo, nos especializamos en ayudar a dueños de pequeños negocios a maximizar sus ventas online sin recurrir a anuncios pagados. Nuestro Curso de Ventas Express es el resultado de años de experiencia y éxito en el campo de las ventas online. Nuestro enfoque práctico y basado en resultados nos diferencia de otros cursos disponibles en el mercado. Con nosotros, no solo aprenderás teoría, sino que también obtendrás habilidades prácticas que podrás aplicar de inmediato en tu negocio."}]} />
<BookAppointment 
                      heading="¡Digitaliza tu negocio ya, propietarios en Santiago! No más ventas solo por recomendación." 
                      description="Nuestro Curso de Ventas Express te ayudará a dominar las ventas online. En solo 3 semanas, podrás aumentar tus ventas a través de redes sociales sin la necesidad de anuncios pagados. ¡Invierte $120.000 CLP y transforma tu negocio hoy!"
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="ovUSBy1YJ9apxkQx90hIVn9HSty1"
                    />
<Footer />
    </main>
  );
}
