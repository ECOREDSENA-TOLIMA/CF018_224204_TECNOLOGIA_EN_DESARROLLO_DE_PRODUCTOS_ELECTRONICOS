<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de los recursos

    p.mt-2.mb-3(data-aos="fade-left") El recurso humano es una parte clave en la gestión del mantenimiento. Es un gasto fijo, por lo que incluirlo en el plan de costos no es un problema. A este le corresponde aproximadamente ¼ del costo total del mantenimiento. En la mayoría de las empresas, la contratación de este personal pocas veces es decidida por la parte técnica, casi siempre lo decide la parte financiera apoyada por el departamento de recursos humanos.
    p.mt-2.mb-3(data-aos="fade-left") Lo ideal es definir el personal técnico en el mismo plan de mantenimiento, determinando:

    .col-sm.mb-5.mb-sm-0(data-aos="fade-left")
      ul.lista-ul
        li 
          i.fas.fa-angle-right
          | El número de personas que se necesitan para cumplir a cabalidad lo planeado.
      ul.lista-ul
        li 
          i.fas.fa-angle-right
          | Calcular la carga de trabajo y la velocidad de respuesta en caso de avería.
      ul.lista-ul
        li 
          i.fas.fa-angle-right
          | Las especialidades con que se va a contar en la ejecución del mantenimiento.
      ul.lista-ul
        li 
          i.fas.fa-angle-right
          | Si se realiza un mantenimiento con la ayuda de una empresa externa o con el personal habitual. 

    p.mt-2.mb-3(data-aos="fade-left") Teniendo todo esto en cuenta, se debe realizar un organigrama del departamento de mantenimiento con una estructura parecida a la establecida en la siguiente figura.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 11.</b> <i>Organigrama de un departamento de mantenimiento</i>

    .row.justify-content-center.mb-4.mt-3
      .col-md-8.px-5 La responsabilidad directa de la oficina de mantenimiento siempre recae sobre el Jefe de Mantenimiento. De ella depende directamente  del director general.  Tiene, entre otras, las siguientes funciones:

    .row.justify-content-center.mb-4.mt-3
      .col-md-8.px-5(data-aos="fade-left")
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | El número de personas que se necesitan para cumplir a cabalidad lo planeado.
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Calcular la carga de trabajo y la velocidad de respuesta en caso de avería.
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Las especialidades con que se va a contar en la ejecución del mantenimiento.
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Si se realiza un mantenimiento con la ayuda de una empresa externa o con el personal habitual. 

    .row.justify-content-center.mb-4.mt-3(data-aos="fade-left")
      .col-md-10.px-5
        figure
          img(src='@/assets/curso/tema2/1.svg', alt='alt')

    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 A cada departamento dependiente del jefe le son asignadas las tareas de acuerdo con el plan de mantenimiento. Existen algunos casos donde son asignadas una serie de responsabilidades tendientes a mejorar el plan de mantenimiento, como la implementación de cargos para introducir datos en el <em>software</em> en el que se registra la actividad en el departamento.

    p.mt-2.mb-3(data-aos="fade-left") Para el caso de la gestión electrónica, es una actividad secundaria, pero de mucha importancia en una empresa; si bien la responsabilidad directa recae sobre el jefe de mantenimiento, es el jefe electrónico el encargado de administrar los recursos para su área. Este cargo debe ser de un profesional en ingeniería electrónica, eléctrica o afines; debe definir cuántos técnicos necesita para cumplir sus tareas, pero esos requerimientos deben ser escalados al jefe de mantenimiento y este, a su vez, al personal de recursos humanos.
    
    .row 
      .col-md-10.offset-md-1.mb-3(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 La propuesta del personal de mantenimiento dependerá de los objetivos a mediano y largo plazo de la planta y de que los cargos gerenciales tengan en cuenta criterios técnicos, sin enfocarse tanto en lo económico, y definir bien el organigrama del departamento de mantenimiento.
            br
            br
            br
            br

    separador          
    #t_2_1.titulo-segundo.mt-2.color-acento-contenido
      h2 2.1 Calidad del mantenimiento

    p.mt-2.mb-3(data-aos="fade-left") Se enfoca en lograr que los equipos no presenten ninguna falla, y si sucede, resolverla en el menor tiempo posible. La calidad se centra en el control de los equipos, en los operadores y los repuestos necesarios, eliminando cualquier aspecto que pueda provocar una falla.
    p.mt-2.mb-3(data-aos="fade-left") Para tener una buena calidad del mantenimiento, deben darse ciertas condiciones. Se hace necesario recurrir al TPM (<em>Total Productive Maintenance</em>, o Mantenimiento Productivo Total, en español). Esta estrategia busca, además, tener cero accidentes; es muy ambiciosa y está centrada en 8 pilares.

    
    .row.justify-content-center.align-items-center
      .col-md-12.mb-3(data-aos="fade-left")
        .tarjeta.tarjeta--gris.p-4
        PasosB.color-primario
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/3.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Enfoque en las mejoras
              p Se debe tener claro el concepto de mejora continua, pues es la base de este pilar. 
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/4.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Gestión de calidad
              p La gestión de la calidad se basa, más que todo, en  la implementación de procesos que lleven a detectar fallos. Se recomienda aplicar herramientas de análisis de los problemas raíces para encontrar el origen de los principales fallos. Es decir, este pilar está basado en el mantenimiento proactivo.

          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/5.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Mantenimiento planificado
              p Esta es la mejor manera de evitar paradas no planificadas. Por estar programado, el equipo solo se detiene en horas que no influyen con la producción normal.
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Autonomía
              p Cada persona tiene la autonomía para cuidar de la limpieza, la inspección y el mantenimiento de los equipos con los que labora. Esto es el equivalente a un mantenimiento preventivo; hace que los técnicos se ocupen sólo de tareas avanzadas.

          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/7.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Gestión de nuevos equipos
              p Este pilar está relacionado con el mantenimiento de actualización. A medida que la tecnología evoluciona, un equipo nuevo puede ser la solución a muchas fallas que presentan equipos viejos y de uso avanzado.
            
          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/8.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Higiene y seguridad en el trabajo
              p Uno de los objetivos de esta técnica es reducir los  accidentes de trabajo: cero accidentes, cero contaminación y cero trabajadores desmotivados y frustrados. Aquí también se busca el bienestar de todos los trabajadores.

          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/20.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 Formación continua
              p Capacitación permanente, sobre todo, cuando se actualizan los equipos. Es necesaria para el conocimiento general de estos por parte del personal que los opera y los técnicos que realizan el mantenimiento. Esto ayuda a que puedan predecir las posibles fallas.

          .row.justify-content-center.align-items-center(titulo="")
            .col-md-3.offset-md-1
                figure
                  img(src='@/assets/curso/tema2/21.svg', alt='alt')
            .col-md-8.mb-4.mb-md-0
              h5 TPM a nivel administrativo
              p Consiste en aplicar estos mismos principios a nivel administrativo.

    p.mt-2.mb-3(data-aos="fade-left") Para garantizar la calidad en mantenimiento es necesario realizar mediciones y verificar que los equipos tengan cero defectos. Asimismo, se asegura que cada elemento y pieza funcione correctamente. 
    
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 Es necesario implementar un <em>software</em> de gestión del mantenimiento para tener éxito en la implementación de un sistema de calidad.
    separador          
    #t_2_2.titulo-segundo.mt-2.color-acento-contenido
      h2 2.2 Gestión de la información

    p.mt-2.mb-3(data-aos="fade-left") La información es un tema muy delicado en cualquier empresa, existen datos que son de alta confidencialidad para estas y muchos de ellos pueden estar relacionados con el mantenimiento. En la planeación y ejecución del mantenimiento, se genera gran cantidad de información que es necesario gestionar, estos datos son utilizados para la toma de decisiones. Dentro de los más importantes, se encuentran:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      TabsA.color-primario.mb-5
        .tarjeta.color-primario--borde.p-4(titulo="Órdenes de trabajo")
          p Este es uno de los principales documentos generados en el departamento de mantenimiento. En este se le indica al técnico el equipo al que se le hará un mantenimiento preventivo o correctivo, se describe claramente lo que se quiere hacer y se incluyen datos que puedan ser de utilidad para la realización del trabajo. 
          p Esta orden debe ser archivada y servirá para calcular todo tipo de indicadores y  también para saber qué intervenciones ha sufrido un equipo.
        .tarjeta.color-primario--borde.p-4(titulo="Informes de mantenimiento")
          p De la orden de trabajo, el técnico genera un informe preliminar, donde  se indican la intervención efectuada, los resultados obtenidos, los materiales utilizados y el tiempo empleado.  
          p Esta información se debe archivar, ya que resulta de gran utilidad para  calcular indicadores, saber qué intervenciones ha sufrido un equipo, tiempo de trabajo de un técnico, cómo se intervino ante un problema presentado y cómo actuar si volviera a suceder; toda esta información constituye el informe de mantenimiento.
        .tarjeta.color-primario--borde.p-4(titulo="Informes de daños")
          p Estos informes son necesarios cuando ocurre una falla que afecta la producción o resulta en una solución costosa. En este informe, se deben  identificar las causas de la falla, las medidas correctivas aplicadas y las posibles medidas preventivas para evitar que vuelva a ocurrir.
        .tarjeta.color-primario--borde.p-4(titulo="Órdenes de compra")
          p Este es un documento muy importante, ya que funciona como un texto legal. Sirve para clientes y proveedores. Allí se presenta información detallada de lo que se pretende adquirir. En el departamento de mantenimiento, se entrega información sobre los pedidos realizados y los costos de elementos y de un equipo.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.pt-3  
          .tarjeta.bg.color-acento-contenido.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-md-2.px-4.mb-3
                img.px-md-1(src="@/assets/curso/tema2/9.svg")
              .col.ps-md-0
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h2 Orden de trabajo
                    p Visualice un ejemplo de un formato de una orden de trabajo
                  .col-3.mb-3.mb-sm-0
                      a.boton.color-acento-botones.lnk(@click="modal1 = true")
                        span Ver Imagen
                        i.fas.fa-search
                        .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")                
            .col-lg-12.p-0.m-0
              figure                    
                img.px-md-0(src="@/assets/curso/tema2/10.svg" alt="alt")

    separador          
    #t_2_3.titulo-segundo.mt-2.color-acento-contenido
      h2 2.3 Gestión del cambio
    
    p.mt-2.mb-3(data-aos="fade-left") Por naturaleza, el ser humano se resiste al cambio, sobre todo si el sentir es que las cosas funcionan bien como están. Esto es a lo que se le conoce como zona de confort; hay problemas, pero estos se solucionan, les cuesta salir de ese estado. Se debe implementar un plan para gestionar el cambio, sobre todo para influir en el personal que presenta resistencia al mismo. Este plan consiste en un sistema que permite la transición de un estado presente a un estado futuro deseado. La siguiente figura representa lo anteriormente expuesto.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 12.</b> <i>Resistencia al cambio</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-8.px-5
        figure
          img(src='@/assets/curso/tema2/11.svg', alt='alt')
          figcaption Nota. Tomada de IHMC (2011).

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 "Cuando el ritmo de cambios dentro de la empresa es superado por el ritmo de cambios fuera, el final está cerca". (Jack Welch, 1995)

    p.mt-2.mb-3(data-aos="fade-left") Esto quiere decir que, si dentro de la institución no se adaptan a los cambios que se presentan permanentemente en el mundo, es probable que, cuando quieran reaccionar a estos, será demasiado tarde y ya no podrán ser competitivos. Un ejemplo de eso sucede con el personal de mantenimiento: si se niega a actualizarse, certificarse, es posible que se presenten personas que ofrecen mejores servicios y acordes con las exigencias actuales. 
    p.mt-2.mb-3(data-aos="fade-left") Los cambios deben ser progresivos, no deben implementarse todos en un corto tiempo, porque se puede generar caos en la empresa. Debe existir una autoevaluación y partir desde un punto real. A continuación, se presenta un proceso de cambio.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 13.</b> <i>Proceso de cambio</i>

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-sm-2
        h4 <center>Proceso de cambio</center>
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-sm-12.col-lg-10
        LineaTiempoB.color-primario.mb-5(:datos="datosLineaTiempoB")

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-sm-12
        h4 <center>Preparando el futuro</center>
        p <center>Se vive el cambio, todo se estabiliza</center>
    
    p.mt-2.mb-3(data-aos="fade-left") La empresa KPMG (s. f.), dedicada a la consultoría, establece la siguiente definición.
    
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 "La gestión del cambio busca facilitar y conseguir la implementación exitosa de los procesos de transformación, lo que implica trabajar con y para las personas en la aceptación y asimilación de los cambios y en la reducción de la resistencia a los mismos".
    
    p.mt-2.mb-3(data-aos="fade-left") La gestión del cambio es otro proceso en el que se debe tener especial cuidado en el manejo del personal. Muchas veces, el cambio puede resultar en la compra de un equipo que agrega o cambia funciones. El trabajo de gestión consiste en adaptar a las personas afectadas a estas nuevas funciones. 
    p.mt-2.mb-3(data-aos="fade-left") Se debe tener la decisión de proponer un cambio cuando se considera que este puede mejorar las funciones actuales. La siguiente figura muestra una posible ruta para gestionar un proceso de cambio.
    
    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 14.</b> <i>Proceso de gestión de cambio</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-8.px-5
        figure
          img(src='@/assets/curso/tema2/18.svg', alt='alt')
      
    .row.justify-content-center.mb-4.mt-3
      .col-sm-12.col-lg-10.mb-4.mb-md-0
        .cajon.color-acento-botones.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-md-2.px-5.mb-3
              figure
                img(src='@/assets/curso/tema2/19.svg', alt='alt')
            .col-md-10.px-0
              p.px-3(data-aos="fade-left") El mundo cambia, los procesos se transforman y la tecnología también, a una velocidad vertiginosa, afectando a la persona y al mundo laboral. Adaptarse a este cambio permanente es la clave para seguir siendo exitosos. La gestión del cambio se ha convertido en una habilidad fundamental para enfrentar la actualidad  y estar preparados para el futuro. 

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 La buena gestión de estos cambios es un indicador de liderazgo, ya que las empresas requieren líderes que sean, al mismo tiempo, precursores del cambio.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    datosLineaTiempoB: [
      {
        titulo: 'Nivel 1: Incertidumbre',
        texto: 'No se sabe qué pasará',
        icono: require('@/assets/curso/tema2/12.svg'),
      },
      {
        titulo: 'Nivel 2: Negación',
        texto: 'Eso no sirve para nada',
        icono: require('@/assets/curso/tema2/13.svg'),
      },
      {
        titulo: 'Nivel 3: Resistencia',
        texto: 'Afecta el desempeño',
        icono: require('@/assets/curso/tema2/14.svg'),
      },
      {
        titulo: 'Nivel 4: Dejando ir',
        texto: 'Se notan los beneficios',
        icono: require('@/assets/curso/tema2/15.svg'),
      },
      {
        titulo: 'Nivel 5: Equilibrio',
        texto: 'Se crean nuevas funciones',
        icono: require('@/assets/curso/tema2/16.svg'),
      },
      {
        titulo: 'Nivel 6: Reflexión',
        texto: '¿Qué se aprendió?',
        icono: require('@/assets/curso/tema2/17.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
