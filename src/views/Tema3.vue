<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Documentación del mantenimiento
    
    p.mt-2.mb-3(data-aos="fade-left") Todo proceso de mantenimiento debe ser documentado. Dicha información se convierte en fuente muy valiosa para la gestión de la máquina intervenida, así como también en la planeación futura del mantenimiento. Las órdenes de trabajo, los informes de daños, órdenes de compra, informes de mantenimiento, manuales técnicos, informes de producción, en fin, toda la documentación relacionada con el proceso de producción de una máquina se convierte en datos que necesariamente deben ser consultados si se requiere gestionar el buen funcionamiento de esta.
    p.mt-2.mb-3(data-aos="fade-left") Las normas para tener en cuenta son:
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-8 
        LineaTiempoD.color-primario.mb-5
          .row.justify-content-center.align-items-center(numero="1" titulo="Norma NTC ISO 9001:2015")
            .col-md-12.mb-4.mb-md-0
              h5.text-small La norma NTC ISO 9001:2015 Sistemas de gestión de la calidad. 
              p.text-small En ella se  plantea una gestión enfocada en los procesos, asignando  funciones e identificando la relación entre los mismos por medio de las entradas y salidas.
            
          .row.justify-content-center.align-items-center(numero="2" titulo="Guía Técnica ISO/TR 10013")
            .col-md-12.mb-4.mb-md-0
              p.text-small La Guía Técnica ISO/TR 10013 “Directrices para la documentación de sistemas de gestión de la calidad” ha sido desarrollada por el Comité Técnico ISO/TC 176, Gestión y aseguramiento de la calidad de la ISO, con el objetivo de  “proporcionar directrices para el desarrollo y mantenimiento de la documentación necesaria para asegurar un sistema de gestión de la calidad eficaz, adaptado a las necesidades específicas de la organización. El uso de estas directrices ayudará a establecer un sistema documentado como el requerido por la norma de sistema de gestión de la calidad aplicable”. (ISO/TR 10013, 2002, p. 2)
          
    p.mt-2.mb-3(data-aos="fade-left") En el mantenimiento de productos electrónicos, esta documentación no es tan amplia, está definida por las intervenciones que se le hacen al equipo, los manuales de usuario y los manuales de servicio técnico. Esta información es clave tenerla siempre a la mano, ya que de ella depende muchas veces la solución de una falla. El fabricante indica, en estos manuales, los procedimientos a seguir ante ciertas situaciones y eventos presentados por el equipo.
    
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 Un complemento para esta información es un listado de componentes necesarios para tener en almacén; algunos fabricantes suministran unas listas con los componentes más comunes y que necesitan ser reemplazados con mayor frecuencia.

    p.mt-2.mb-3(data-aos="fade-left") Ahora bien, las fichas técnicas son los documentos más importantes de cualquier equipo electrónico. En estas, se detallan sus características, funciones, procesos y parámetros de variables asociadas; pueden variar de un equipo a otro, pero su finalidad es la misma, proporcionar información vital para el funcionamiento del equipo. Muchas fichas técnicas van más allá de las máquinas, llegando a tener una ficha por cada componente principal o pieza que necesite reemplazo periódico; los circuitos integrados, los electrodos, rectificadores, tiristores de potencia son componentes de frecuente intervención, por lo que es necesario contar con una ficha técnica de estos. 

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11.pt-3  
          .tarjeta.bg.color-acento-contenido.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-md-2.px-4.mb-3
                img.px-md-1(src="@/assets/curso/tema3/1.svg")
              .col.ps-md-0
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h2 Ficha técnica
                    p Visualice un ejemplo de varios formatos de ficha técnica. El contenido de estos, soportan a una máquina o equipo y pueden ser tan detallados como el departamento de mantenimiento lo requiera. Lógicamente, entre más detalles se tenga, más eficiente será el procedimiento de mantenimiento, sobre todo si se trata de uno correctivo.
                  .col-3.mb-3.mb-sm-0
                      a.boton.color-acento-botones.lnk(@click="modal1 = true")
                        span Ver Imagen
                        i.fas.fa-search
                        .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")                
            .col-lg-12.p-0.m-0
              SlyderC.mb-5(:datos="datosSlyder")

    separador          
    #t_3_1.titulo-segundo.mt-2.color-acento-contenido
      h2 3.1 Gestión de la información

    p.mt-2.mb-3(data-aos="fade-left") Existen diferencias entre el manual de usuario y el manual del fabricante o manual de servicio.
    
    
    .row 
      .col-md-10.offset-md-1
        PasosA.color-primario.mb-5(tipo="l")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h3 Manual de usuario
              p Se limita a dar información al usuario final donde se brindan instrucciones de operación y solución básica de algunos problemas menores; viene con todos los equipos electrónicos y no tiene ninguna restricción.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/5.svg', alt='alt')
              
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/6.svg', alt='alt')
            .col-md-6
              h3 Manual del fabricante o manual de servicio
              p Este documento es de uso restringido, no es suministrado de forma libre por el fabricante y se requiere de un proceso de adquisición con el pago de una suma importante de dinero. Esto es así porque este manual posee información detallada del funcionamiento del equipo, incluyendo planos de fabricación, PCB e información de configuración, además incluye procedimientos de parametrización, autopruebas de diagnóstico muy útiles para detectar fallas.
      
    .row.justify-content-center.align-items-center
      .col-md-8
        p.mt-2.mb-3(data-aos="fade-left")  Es tan extenso como complejo sea el equipo, se constituye en una pieza fundamental en cualquier departamento de mantenimiento, ya que representa un ayuda valiosa a la hora de resolver problemas por fallas graves. 

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 15.</b> <i>Portada de un manual de servicios</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-10.px-5
        figure
          img(src='@/assets/curso/tema3/7.svg', alt='alt')
          figcaption Nota. Tomada de Epson (s. f.). Se puede apreciar en la portada de este manual que hay una inscripción que dice “Confidencial”, por tanto, el comprador no tiene permitido divulgar este manual una vez efectuada la compra, solo lo puede utilizar como recurso de su empresa, de hacerlo, puede incurrir en penalidades por violación a los derechos de autor.

    p.mt-2.mb-3(data-aos="fade-left") Algunos manuales, como el de la imagen anterior, se convierten en libre divulgación sólo porque el equipo al que hace referencia entró en desuso y ya no es producido por el fabricante.

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2 La mayoría de los manuales de servicio son un complemento del manual de usuario, es decir, vienen también incluidos los procedimientos de usuario final, por lo que solo se hace necesario tener este. Existen componentes a los que a su hoja de datos se le incluye información detallada, con ejemplos de montaje, por lo que tienden más a parecerse a un manual de servicio, pero sin las restricciones de este.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.pt-3  
          .tarjeta.bg.color-acento-contenido.p-2.mb-4
            .row.justify-content-around.align-items-center
              .col-md-1.px-4.mb-3
                img.px-md-1(src="@/assets/curso/tema3/8.svg")
              .col.ps-md-0
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Manual de servicio
                    p En el material complementario, encontrará un manual de servicio donde podrá apreciar las distintas instrucciones dadas por el fabricante para procedimientos de desarme de los equipos.
    separador          
    #t_3_2.titulo-segundo.mt-2.color-acento-contenido
      h2 3.2 Gestión de la información

    p.mt-2.mb-3(data-aos="fade-left") Si se reúnen todos los documentos tratados hasta aquí, se archivan sistemáticamente y se crea una etiqueta única para el equipo, entonces se tiene su hoja de vida. Esta documentación incluye los informes de instalación inicial, los manuales técnicos suministrados y los adquiridos a posteriori, todos los mantenimientos preventivos, predictivos, correctivos, fallas generales, en fin, lo ideal es que cuando se consulte la información del equipo, se pueda establecer con claridad su comportamiento durante su vida productiva.
    p.mt-2.mb-3(data-aos="fade-left") Esta información es trascendental para la elaboración del plan de mantenimiento, es por eso que se requiere de un buen reporte en el día a día. A continuación, se presenta un ejemplo de este formato

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 16.</b> <i>Formato inicial de hoja de vida de un equipo</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-10.px-5
        figure
          img(src='@/assets/curso/tema3/9.svg', alt='alt')
          figcaption Un formato como el mostrado en la imagen es el punto de partida para la hoja de vida, el cual suministra información inicial del equipo. La hoja de vida es un documento dinámico y se debe ir actualizando con el paso del tiempo.

    p.mt-2.mb-3(data-aos="fade-left") Esta hoja de vida, naturalmente, se debe complementar con los manuales de servicio técnico, procedimientos de calibración, si los tiene, parametrización, procedimientos en caso de fallas y todas las órdenes de servicio y órdenes de compra generadas en los procesos de mantenimiento.
    
    separador          
    #t_3_3.titulo-segundo.mt-2.color-acento-contenido
      h2 3.3 Órdenes de servicio
    p.mt-2.mb-3(data-aos="fade-left") En términos generales, una orden de servicio es un documento donde se registran datos relacionados con las solicitudes de mantenimiento, compras e incluso solicitudes de producción. Es una manera de formalizar todo dentro de un estándar para facilitar el seguimiento.
    p.mt-2.mb-3(data-aos="fade-left") Si se refiere solo al mantenimiento de equipos electrónicos, esta se limita a aquellas solicitudes de intervención del equipo; es importante diligenciarlas porque mantienen organizadas las tareas, permitiendo que se cumplan dentro de los tiempos requeridos; de esta manera, se le puede dar prioridad a los servicios más urgentes. A continuación, se presenta un ejemplo de este formato.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 17.</b> <i>Formato de orden de servicio</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-10.px-5
        figure
          img(src='@/assets/curso/tema3/10.svg', alt='alt')
          figcaption La orden de servicio debe ser bien diligenciada. Debe expresar de manera clara lo que pretende hacerle al equipo y manifestar quién será el técnico encargado del procedimiento, fecha y hora programadas para la intervención. Aunque no existe un único formato, estas son informaciones básicas que debe contener; el documento puede variar aún dentro de una misma empresa, dependiendo del área de operación del equipo. Dentro del software de mantenimiento, viene incluida la sección para generar las órdenes de servicio, así como también la realimentación de estas.
    
    p.mt-2.mb-3(data-aos="fade-left") Es inevitable que los equipos envejezcan y que fallen. El mantenimiento de lo que trata es de que esas deficiencias afecten lo menos posible la producción final de la empresa. Un plan de mantenimiento, bien planeado y ejecutado, evita en gran medida la afectación por esas fallas.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    datosSlyder: [
      {
        titulo: 'Formato de ficha técnica',
        imagen: require('@/assets/curso/tema3/2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ficha técnica diligenciada ',
        imagen: require('@/assets/curso/tema3/3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Nota. Tomado de Vishay (2017)',
        imagen: require('@/assets/curso/tema3/4.svg'),
        leyendaImagen: 'Leyenda de la imagen',
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
