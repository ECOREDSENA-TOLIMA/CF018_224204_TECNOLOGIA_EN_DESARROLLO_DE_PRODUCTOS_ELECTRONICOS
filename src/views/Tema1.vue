<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La función de mantenimiento
    p.mt-3.mb-3(data-aos="fade-left") Cuando se habla de mantenimiento, se hace referencia a algo que ya fue fabricado y que muy probablemente esté en uso. 

    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2(data-aos="fade-left") “Mantenimiento: (…) 2. m. Conjunto de operaciones y cuidados necesarios para que instalaciones, edificios, industrias, etc., puedan seguir funcionando adecuadamente”. (Real Academia Española, 2020 ).

    p.mt-3.mb-3(data-aos="fade-left") El mantenimiento debe estar enfocado en prevenir una falla en un equipo o un proceso. Por ello, la importancia de identificar las características del mismo o del sistema y enfocar el mantenimiento en prevenir aquellas fallas que, por la naturaleza del equipo, se pueden predecir. 
           
    .row 
      .col-md-10.offset-md-1.mb-3
        .bloque-texto-g.color-primario.p-4(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.pt-1.pb-3.mb-3 Mantenimiento a redes de comunicaciones
            br
            br
            p.pt-1.pb-3.mb-3 La principal función del mantenimiento es evitar que un equipo o un sistema completo deje de funcionar por una falla presentada en algún elemento; y si esta se presenta, corregirla en el menor tiempo posible .
            br
            br

    p.mt-3.mb-3(data-aos="fade-left") También se puede decir que un buen programa de mantenimiento busca, dentro de otras acciones, las siguientes:

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Propósitos de un mantenimiento</i>

    .row.justify-content-center.align-items-center.mb-3
      .col.lg-12.col-lg-6.justify-content-center.align-items-center.mt-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/2.svg', alt='alt')

    p.mt-3.mb-3(data-aos="fade-left") Las empresas invierten grandes recursos en el mantenimiento de maquinaria, porque la compensación puede ser grande. Una parada de una máquina en una línea productiva, por varios días, puede significar pérdidas enormes, las cuales se pueden evitar con un buen plan de mantenimiento.

    Separador
    #t_1_1.titulo-segundo.mt-2.color-acento-contenido
      h2 1.1 Tipos de mantenimiento

    p.mt-3.mb-3(data-aos="fade-left") El mantenimiento de mayor implementación, y al que se le debe dar prioridad en cualquier ambiente, es el preventivo, debido a que evita, en gran medida, que se presenten los demás. A medida que evolucionan estas prácticas, se derivan otras definiciones para los tipos de mantenimiento. La siguiente figura presenta los tipos más usados, incluyendo los que han evolucionado con las últimas tecnologías.
    
    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Tipos de mantenimiento</i>

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/33.svg', alt='Texto que describa la imagen')
          

      .tarjeta.color-secundario.p-3(x="15.5%" y="61%" numero="X")
        .h5.mb-2 Mantenimiento correctivo
        p Se trata de un  mantenimiento no planificado, originado por una falla de los elementos que conforman el equipo, la cual puede ser el resultado de la falta de supervisión del rendimiento del equipo, dando origen a un alto de la productividad si no se cuenta con sistemas redundantes. 
        p Casi siempre, genera caos, ya que, al proceder a repararlo, siempre es de emergencia y requiere del desarme parcial o total. 

      .tarjeta.color-secundario.p-3(x="7%" y="86%" numero="X")
        .h5.mb-2 Mantenimiento Correctivo - Inmediato
        p Este se da cuando se cuenta con lo necesario para su reparación.

      .tarjeta.color-secundario.p-3(x="24%" y="86%" numero="X")
        .h5.mb-2 Mantenimiento Correctivo - Diferido
        p Sucede cuando se requiere de la compra de repuestos o importación de algunos elementos.

      .tarjeta.color-secundario.p-3(x="58.4%" y="61%" numero="X")
        .h5.mb-2 Mantenimiento preventivo
        p Este tipo de mantenimiento está destinado a evitar que sucedan fallas que lleven al correctivo. Se trata de un plan para anticiparse a los problemas por el uso continuo. Son una serie de acciones, entre ellas, la revisión permanente, para poder evitar que con el tiempo y el uso se presenten desgastes de componentes y terminen llevando al equipo a una falla inminente.
        p Entre las señales que se deben tener en cuenta para la realización de este tipo de mantenimiento, se presentan las siguientes:
      
        p - Vibraciones.
        p - Sonidos poco comunes.
        p - Temperatura fuera de parámetros.
        p - Niveles de magnitudes eléctricas fuera de parámetros normales.

      .tarjeta.color-secundario.p-3(x="41.5%" y="86%" numero="X")
        .h5.mb-2 Mantenimiento preventivo - Programado
        p Con un buen plan de mantenimiento predictivo, se puede asegurar ahorro en las reparaciones graves de los equipos y se pueden evitar las complicaciones como consecuencia de una falla grave. A este tipo de mantenimiento se le conoce como mantenimiento preventivo programado.

      .tarjeta.color-secundario.p-3(x="58.5%" y="86%" numero="X")
        .h5.mb-2 Mantenimiento preventivo - Predictivo
        p Busca anticipar fallos causados por elementos que están al final de su vida útil, tal es el caso de los toners de impresoras, que se puede determinar con buena precisión cuándo se van a agotar y, por tanto, se puede tener un #[i stock] y realizar el cambio antes de que se agote y se genere un paro innecesario en una línea.
    
      .tarjeta.color-secundario.p-3(x="75.8%" y="85.6%" numero="X")
        .h5.mb-2 Mantenimiento preventivo – De oportunidad
        p Este aprovecha las paradas o periodos de inactividad de los equipos para realizar tareas de mantenimiento. Se hacen revisiones especiales, si es necesario, algunas reparaciones, para evitar paros en el futuro.
    
      .tarjeta.color-secundario.p-3(x="75.4%" y="61%" numero="X")
        .h5.mb-2 Mantenimiento proactivo
        p Existe otra definición para  mantenimiento y viene a ser una mezcla del preventivo y el correctivo. Este se denomina Mantenimiento proactivo, pues se especializa en detectar la raíz de fallas o averías que esté presentando el equipo de manera recurrente para solucionarlas de forma definitiva. Por lo tanto, este tipo de mantenimiento no ataca los efectos, sino las causas reales de los problemas presentados. Es necesario un buen diagnóstico para poder atacar la raíz del problema.

      .tarjeta.color-secundario.p-3(x="92.6%" y="61%" numero="X")
        .h5.mb-2 Mantenimiento evolutivo
        p Las nuevas tecnologías trajeron consigo nuevas definiciones para los tipos de mantenimiento, así es como surge el Mantenimiento evolutivo, el cual no tiene como finalidad la corrección de fallas; se hace para realizar una actualización de los componentes o módulos que tienen versiones mejoradas en el mercado. Este tipo de mantenimiento es de gran importancia, sobre todo porque la tecnología evoluciona de manera constante, lo que trae como consecuencia que los dispositivos, sobre todo los basados en sistemas de cómputo, queden obsoletos muy rápidamente.


    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
    //-       span Tipo mantenimiento 01
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal1")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/3.svg', alt='Texto que describa la imagen')
            
    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
    //-       span Tipo mantenimiento 02
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal2")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/4.svg', alt='Texto que describa la imagen')
    
    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")
    //-       span Tipo mantenimiento 03
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal3")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/5.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
    //-       span Tipo mantenimiento 04
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal4")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal5 = true")
    //-       span Tipo mantenimiento 05
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal5")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal6 = true")
    //-       span Tipo mantenimiento 06
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal6")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/8.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal7 = true")
    //-       span Tipo mantenimiento 07
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal7")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal8 = true")
    //-       span Tipo mantenimiento 08
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal8")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/10.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal9 = true")
    //-       span Tipo mantenimiento 09
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal9")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/11.svg', alt='Texto que describa la imagen')

    //- .row.justify-content-center.align-items-center.mb-4
    //-   .col-auto
    //-     a.boton.color-acento-contenido.indicador__container(@click="modal10 = true")
    //-       span Tipo mantenimiento 10
    //-       .indicador--click(v-if="mostrarIndicador")
    //- ModalA(:abrir-modal.sync="modal10")
    //-   .row.justify-content-center.align-items-center.mb-4
    //-     .col-md-10
    //-       figure
    //-         img(src='@/assets/curso/tema1/12.svg', alt='Texto que describa la imagen')
    
    p.mt-3.mb-3(data-aos="fade-left") Para establecer un plan de mantenimiento, son necesarias una serie de tareas, con el fin de cumplir unos objetivos de disponibilidad, confiabilidad y costos. Todos ellos con un objetivo bien claro: aumentar al máximo la vida útil de los equipos. Se necesitan implementar unos protocolos de mantenimiento por tipo de equipo; es posible que, dependiendo de la línea del mismo, se necesiten planes de mantenimiento diferentes; para esto, es necesario tener en cuenta las siguientes recomendaciones.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Recomendaciones</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-2.px-5
        figure
          img(src='@/assets/curso/tema1/13.svg', alt='alt')
          p.text-small.mt-3.mb-3(data-aos="fade-left") Seguir las instrucciones de los fabricantes.
      .col-md-2.px-5
        figure
          img(src='@/assets/curso/tema1/14.svg', alt='alt')
          p.text-small.mt-3.mb-3(data-aos="fade-left") Guiarse por los protocolos de mantenimiento de cada equipo.
      .col-md-2.px-5
        figure
          img(src='@/assets/curso/tema1/15.svg', alt='alt')
          p.text-small.mt-3.mb-3(data-aos="fade-left") Realizar el análisis de fallos potenciales que se pueden presentar.
      .col-md-2.px-5
        figure
          img(src='@/assets/curso/tema1/16.svg', alt='alt')
          p.text-small.mt-3.mb-3(data-aos="fade-left") Las actividades rutinarias que se realizan y que normalmente las lleva a cabo el equipo de operación.
      .col-md-2.px-5
        figure
          img(src='@/assets/curso/tema1/17.svg', alt='alt')
          p.text-small.mt-3.mb-3(data-aos="fade-left") Las actividades programadas que se realizan a lo largo del año.
      .col-md-2.px-5
        figure
          img(src='@/assets/curso/tema1/18.svg', alt='alt')
          p.text-small.mt-3.mb-3(data-aos="fade-left") Las actividades que se realizan durante las paradas programadas; en estas actividades, es donde se pueden implementar tareas de mantenimiento  preventivo y predictivo y que muchas veces pueden  llevar a uno correctivo.


    p.mt-3.mb-3(data-aos="fade-left") Ahora, un plan de mantenimiento puede implementarse atendiendo los pasos que se muestran en la siguiente figura.
    
    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Pasos para un plan de mejoramiento</i>
    .row.justify-content-center.mb-4.mt-3
      .col-md-12.px-5
        figure
          img(src='@/assets/curso/tema1/19.svg', alt='alt')
    
    .row.justify-content-center
      .col-sm-12.col-lg-10.mb-4.mt-4
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2(data-aos="fade-lef") Otra ventaja de hacer un buen mantenimiento es que se reducen los riesgos de accidentalidad, pues equipos en mal estado son frecuentemente causal de muchos accidentes. 

    p.mt-3.mb-3(data-aos="fade-left") Adicionalmente, es necesario aclarar que, por sus características, a los equipos electrónicos no se les puede implementar un plan de mantenimiento sistemático, solo aquel que lleva a limpieza y prevención; estos equipos fallan sin avisar y se debe centrar en los factores de esas posibles deficiencias: temperatura, humedad, suciedad, vibración, fuentes de alimentación salidas de parámetros, puesta a tierra, entre otros.
        
    .row 
      .col-md-10.offset-md-1.mb-3
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/20.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 La puesta a tierra (pararrayo) es muy importante, ya que un rayo en un equipo electrónico puede ser catastrófico. En muchos casos es necesario reemplazar el sistema electrónico completo .
            br
            br
            br
            br

    p.mt-3.mb-3(data-aos="fade-left") El plan RCM (Reliability Centred Maintenance, o Mantenimiento Centrado en Fiabilidad, en español) es una técnica utilizada para elaborar un plan de mantenimiento y presenta algunas ventajas relevantes sobre otras, tal como se observa a continuación.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Plan RCM</i>

    .row.justify-content-center.align-items-center.mb-4.mt-3
      .col-lg-7
        .p-4
          p Esta técnica inicialmente fue implementada en aviación posteriormente, fue llevada al campo militar, y por sus excelentes resultados, fue implementada también en el campo industrial.
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-8.px-5
        figure
          img(src='@/assets/curso/tema1/21.svg', alt='alt')
          
    .row.justify-content-center.align-items-center.mb-4.mt-3
      .col-lg-5
        .tarjeta.color-primario
            .p-4
              p El objetivo fundamental es aumentar la confiabilidad de los equipos en el sistema, es decir, disminuir el tiempo de parada de una línea de producción por averías imprevistas.

    .row.justify-content-center.mb-4.mt-3
      .col-md-5.px-5
        figure
          img(src='@/assets/curso/tema1/22.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-4.mt-3
      .col-lg-7
        .p-4
          p También se destacan otros objetivos igualmente importantes: aumentar la disponibilidad, es decir, la proporción del tiempo que los equipos están en disposición y disminuir, al mismo tiempo, los costos por mantenimiento.

    p.mt-2.mb-3(data-aos="fade-left") El análisis de los posibles fallos de una línea de producción, según esta metodología, aporta una serie de resultados, como también una serie de acciones que llevan a evitarlos. A continuación, se presentan algunos de ellos.

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-8 
        LineaTiempoD.color-primario.mb-5
          .row.justify-content-center.align-items-center(numero="1" titulo="Resultados")
            .col-md-12.mb-4.mb-md-0
              p.text-small El análisis de los posibles fallos de una línea de producción, según  esta metodología, aporta una serie de resultados, dentro de ellos, están:
              ul.lista-ul.text-small
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Mejora el aprendizaje del funcionamiento de los equipos.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Analiza todas las posibilidades de falla de un equipo y se pueden implementar mecanismos que tratan de evitarlos, ya sean producidos por el funcionamiento propio del equipo o por acciones de los operadores.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Se pueden implementar una serie de acciones que permiten garantizar una alta disponibilidad del equipo.
            
          .row.justify-content-center.align-items-center(numero="2" titulo="Acciones")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se pueden implementar una serie de acciones que lleven  a evitar los fallos:
              ul.lista-ul.text-small
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Determinar tareas de mantenimiento que eviten o reduzcan los fallos.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Mejorar y modificar montajes de los equipos.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Reducir los efectos de los fallos.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Definir el #[i stock] de repuestos que es necesario para los equipos.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Procedimientos operativos.
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Planes de capacitación. 
    
          .row.justify-content-center.align-items-center(numero="3" titulo="RCM")
            .col-md-12.mb-4.mb-md-0
              p.text-small Está basado en descubrir todos los posibles fallos potenciales que puede tener un equipo, identificar las causas que los provocan e  implementar una serie de medidas preventivas para evitar que esos fallos se produzcan. Para  poner en marcha este proceso, es necesario plantear una serie de preguntas y estas deben quedar resueltas:
              ul.lista-ul.text-small
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Cómo es el comportamiento de cada equipo?
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Cuáles son los estándares de funcionamiento en cada sistema?
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Qué causa cada fallo?
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Qué consecuencias trae cada fallo?
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Qué parámetros medidos alertan de un fallo?
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Cómo pueden evitarse estos fallos?
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | ¿Qué debe hacerse si no se puede evitar un fallo? 
          
    p.mt-2.mb-3(data-aos="fade-left") La respuesta a las anteriores preguntas conduce a identificar los fallos potenciales, las causas y las medidas preventivas que tendrán que adoptarse.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>MCM</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-12.px-5
        figure
          img(src='@/assets/curso/tema1/23.svg', alt='alt')

    separador          
    #t_1_2.titulo-segundo.mt-2.color-acento-contenido
      h2 1.2 Costos y presupuesto de mantenimiento

    p.mt-2.mb-3(data-aos="fade-left") El cálculo de los costos de mantenimiento es una labor que se basa en predicciones, por lo tanto, no es fácil realizarla. Existe una fórmula matemática para establecer un costo general. Aquí, el problema se basa en que los equipos electrónicos, por sus características, no encajan en esta fórmula, a menos que hagan parte de otro sistema general; es decir, como un sistema de control de una máquina en especial.
    p.mt-2.mb-3(data-aos="fade-left") La fórmula matemática establece que los costos de mantenimiento son un 3 % del costo por reposición, es decir, que el mantenimiento de una máquina o un sistema cuesta el tres por ciento de lo que costaría reemplazarla por una nueva:
    
    .row.justify-content-center.mb-1.mt-3
      .col-sm-12.col-lg-2
        h4.mt-2.mb-3(data-aos="fade-left") Cm = 0.03 * Cr


    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2(data-aos="fade-left") En estos costos, hay partes que no varían, año a año son las mismas: la mano de obra, reparaciones programadas y materiales de consumo, pero existen otras que resultan impredecibles, tales como: fallas en equipos electrónicos, fallas por error humano, en fin. Todos esos accidentes, que, por su naturaleza, no se pueden anticipar, resultan en daños en los equipos.

    p.mt-2.mb-3(data-aos="fade-left") Existen otros aspectos que se deben tener en cuenta a la hora de establecer costos para el plan de mantenimiento, y son aquellas máquinas cuyo mantenimiento es programado. El periodo de este es mayor a un año. No es posible establecer un costo anual para estos casos, por lo que se debe idear una estrategia para repartirlos en los periodos del mismo. A continuación, se presentan los pasos para establecer un plan de mantenimiento.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Pasos para establecer un plan de mantenimiento</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-12.px-5
        figure
          img(src='@/assets/curso/tema1/24.svg', alt='alt')


    .row.justify-content-center.mb-4.mt-3
      .col-sm-12.col-lg-10.mb-4.mb-md-0
        .cajon.color-acento-botones.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-md-2.px-5.mb-3
              figure
                img(src='@/assets/curso/tema1/25.svg', alt='alt')
            .col-md-10.px-0
              p.px-3(data-aos="fade-left") Siempre hay que tener en cuenta, al establecer un presupuesto de mantenimiento, los costos iniciales de implementación, aquellos que implican la compra inicial de herramientas, #[i stock] de repuestos, capacitación del personal, entre otros. Estos costos no son repetitivos, y si se vuelven a dar, es en menor cuantía, es decir, solo tendría que tenerse en cuenta la actualización y el mantenimiento de las mismas herramientas que lo requieran.
              p.px-3(data-aos="fade-left") Estos aspectos son relevantes a la hora de establecer costos anuales por mantenimiento. Si estos costos son más elevados de lo que realmente se quería, se afecta la contabilidad de la empresa y su destinación. En cambio, si están por debajo de lo que realmente se necesitaba y no se cuenta con los recursos  suficientes, existe la posibilidad de que se presenten fallas por falta de mantenimiento,  se disminuye la vida útil de los equipos, lo que, a su vez y a la larga, resulta catastrófico para las necesidades de la empresa. 
              p.px-3(data-aos="fade-left") Todo lo anterior quiere decir, en otras palabras, que se necesita de una muy buena planeación para determinar los costos de mantenimiento en cualquier empresa.
    
    separador          
    #t_1_3.titulo-segundo.mt-2.color-acento-contenido
      h2 1.3 Listado de repuestos

    p.mt-2.mb-3(data-aos="fade-left") El listado de repuestos necesarios para ejecutar un plan de mantenimiento es una práctica que requiere de mucha atención. Frecuentemente, y con el objetivo de garantizar el cumplimiento de los planes, se cae en altas inversiones al comprar repuestos y materiales consumibles, muchas veces innecesarios, lo que lleva a la generación de altos costos operativos. Esto se hace más evidente a medida que los equipos envejecen y el mantenimiento se hace más recurrente. Esta mala práctica puede afectar, dentro de otros aspectos, los siguientes. 

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Aspectos afectados</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-12.px-5
        figure
          img(src='@/assets/curso/tema1/26.svg', alt='alt')


    .row.justify-content-center
      .col-md-10.mb-3.mt-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/27.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 Este método se basa en la estadística y puede determinar, en buen nivel, el #[i stock] de partes, repuestos y material de consumo requeridos para que los equipos cumplan con su función dentro de los niveles deseables.
            br
            br
            br
            br

    p.mt-2.mb-3(data-aos="fade-left") Al aplicar esta metodología, se debe responder a las siguientes preguntas:

    .row.mb-3
      .col-sm.mb-sm-0
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | ¿Qué repuestos deben ser solicitados?
          li 
            .lista-ol--cuadro__vineta
              span 2
            | ¿Qué cantidad de cada parte se debe solicitar?
          li 
            .lista-ol--cuadro__vineta
              span 3
            | ¿En qué momento se debe realizar el pedido?

    p.mt-2.mb-3(data-aos="fade-left") Cada respuesta lleva a encontrar la mejor manera de ejecutar de forma eficiente el mantenimiento en el momento oportuno, disminuyendo los costos por equipos parados, así como también los costos de inventarios de partes y repuestos no utilizados.
    
    p.mt-2.mb-3(data-aos="fade-left") Existen algunas metodologías complementarias que ayudan en la gestión de los listados de partes disponibles en el inventario, algunas de ellas son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align.items.center(titulo="Análisis ABC")
        .col-md-12.mb-4.mb-md-0
          p Este método categoriza el inventario concentrando esfuerzos y recursos en los artículos que son más importantes para los equipos; está basado en la observación empírica y determina que una pequeña fracción de artículos representa una parte importante de la empresa.
      
      .row.justify-content-center(titulo="RCS")
        .col-md-12.mb-4.mb-md-0.align.items.center
          h4 RCS(<em>Reliability Centred Spares</em>, o Repuestos Centrados en la Confiabilidad, en español)
          p Se determina el nivel de stock de repuestos con base en la vida útil de los mismos, estableciendo  los costos y los requisitos de los equipos y las operaciones de mantenimiento. Este método se basa directamente en la metodología del Mantenimiento Centrado en Confiabilidad (MCC).

      .row.justify-content-center(titulo="Método de Montecarlo")
        .col-md-12.mb-4.mb-md-0.align.items.center
          p Más que un método, es una simulación inventada en un casino del principado de Mónaco. Esta simulación utiliza  un método estadístico  para resolver problemas matemáticos complejos a través de la generación de variables aleatorias. Es  una técnica de muestreo. Se emplea para operar numéricamente sistemas complejos de tipo aleatorio, se combinan conceptos estadísticos con la capacidad de los sistemas de cómputo para generar números aleatorios y cálculos de manera autónoma. Se puede programar un algoritmo para generar los números aleatorios que posteriormente se utilizarán en una distribución normal y así obtener la demanda anual del producto.
      
      .row.justify-content-center(titulo="Método de niveles de máximos y mínimos")
        .col-md-12.mb-4.mb-md-0.align.items.center
          p Al aplicar esta técnica, se establecen niveles máximos y mínimos de inventario, fijando un periodo de revisión. La orden de pedido corresponde a la diferencia entre la Existencia Máxima calculada y las Existencias Actuales de inventario. Algunos #[i software] de gestión de inventarios emplean la técnica de máximos y mínimos haciendo un cálculo del punto de revisión y solicitando automáticamente las órdenes de compra correspondientes con las cantidades necesarias. Para lograr esto, se aplican las siguientes fórmulas:
          p #[em 𝐸𝑚𝑛 = 𝐶𝑚𝑛 ∗ 𝑇𝑟]
          p Donde:
          p Emn:  existencia mínima (inventario de seguridad).
          p Cmn:  consumo mínimo diario
          p Tr: tiempo de reposición de inventario (en días)
          p #[em 𝑃𝑝 = (𝐶𝑝 ∗ 𝑇𝑟) + 𝐸𝑚𝑛]

          p Donde:
          p Pp: punto de pedido.
          p Cp:  consumo medio diario

          p #[em 𝐸𝑚𝑥 = (𝐶𝑚𝑥 ∗ 𝑇𝑟) + 𝐸𝑚𝑛]
          p Donde:
          p Emx: existencia máxima
          p Cmx:  consumo máximo diario

          p #[em 𝐶𝑃 = 𝐸𝑚𝑥 – 𝐸]

          p CP:  cantidad de pedido
          p E:  existencia actual

      .row.justify-content-center(titulo="Método cantidad de pedido constante")
        .col-md-12.mb-4.mb-md-0.align.items.center
          p El modelo EOQ (Cantidad Económica de Pedido, en español)  está basado en determinar  el punto en el que los costos de pedido sean iguales a los costos de mantenimiento, para así determinar el nivel de existencia en inventario y la cantidad ideal para realizar un pedido.
          p Está basado en 3 puntos claves: 
          p 1. Que la demanda sea constante, por lo cual se conocen sus resultados con anterioridad.
          p 2. Que la frecuencia de uso del inventario no cambia con el paso del tiempo.
          p 3. Que los pedidos se reciben en el mismo momento en que los inventarios se agotan.
          p Este método no tiene mucha aplicación en inventario de repuestos para equipos electrónicos por lo difícil de predecir las fallas graves.

    p.mt-2.mb-3(data-aos="fade-left") Y la secuencia para obtener un listado de repuesto es:
    
    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 9.</b> <i>Secuencia para obtener un listado de repuestos</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-10.px-5
        figure
          img(src='@/assets/curso/tema1/28.svg', alt='alt')

    p.mt-2.mb-3(data-aos="fade-left") En la elaboración de listado de repuestos para equipos electrónicos, es de suma importancia la clasificación de los elementos que se van a utilizar. Los componentes electrónicos generalmente tienen una vida útil extensa. Aunque en algunos casos se puede predecir una posible falla, la mayoría solo lo hace cuando interactúa sobre ellos una fuerza externa no predecible y casi siempre provocada, por ejemplo, una sobrecorriente en el sistema de alimentación o una sobrecarga producida por un fenómeno atmosférico como un rayo. De ahí, la importancia de mantenerlos en el inventario.

    .row
      .titulo-sexto.color-acento-contenido.mb-3.offset-lg-2.mt-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 10.</b> <i>Repuestos más usados en un stock</i>
    
    .row.justify-content-center.mb-4.mt-3
      .col-md-12.px-5
        figure
          img(src='@/assets/curso/tema1/29.svg', alt='alt')

    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2(data-aos="fade-left") La disponibilidad de recursos en el almacén es crucial para el buen funcionamiento de los equipos electrónicos. Estos repuestos almacenados, por sí solos, no representan ningún ingreso para la empresa, lo que repercute en que no sea tema de prioridad para la parte gerencial. De ahí, la importancia de una buena gestión de estos componentes, teniendo en cuenta los métodos de listados de repuestos .

    p.mt-2.mb-3(data-aos="fade-left") Es importante distinguir entre las piezas y componentes. Una pieza tiende a sufrir más desgaste y, por lo tanto, es más susceptible de ser reemplazada después de un tiempo de uso. A continuación, se exponen algunos elementos que se pueden mantener en stock.

    TabsC.color-primario.mt-3
      .py-3.py-md-4(titulo="Componentes electrónicos de uso común")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Resistores de 1K𝝮, 220𝝮, 330𝝮, 10K𝝮, 100K𝝮, 100𝝮, 2.2𝝮 (resistor fusible).
            p Varistores para red de 110V y 220V.
            p Capacitores de 10𝝻F, 100𝝻F, 1000𝝻F, 3300𝝻F, 0.1𝝻F, 0.01𝝻F.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/30.svg', alt='Texto que describa la imagen')
              figcaption Capacitores de uso común

      .py-3.py-md-4(titulo="Piezas de uso común")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p En cuanto a las piezas, es necesario aplicar una de las técnicas para establecer el listado de componentes dependiendo de la naturaleza de estas. A manera de ejemplo, se puede mencionar el caso de los electrodos utilizados en la medición de humedad, vibración, temperatura, antenas extraíbles, audífonos.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/31.svg', alt='Texto que describa la imagen')
              figcaption Electrodo de uso común
              
      .py-3.py-md-4(titulo="Componentes de consumo")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Existen componentes electrónicos que, por sus características, se pueden convertir en consumo, pero determinar su necesidad y cantidad disponible en almacén hace parte del plan de mantenimiento; tal es el caso de los toner de impresoras láser existentes en muchas líneas de producción, sobre todo de empaquetado.
            p También entran en esta categoría las baterías de respaldo, los medios de almacenamiento y aquellos componentes que, debido al uso continuo, sufren de desgaste.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/32.svg', alt='Texto que describa la imagen')
              figcaption Repuestos de impresora láser

    p.mt-2.mb-3(data-aos="fade-left") Una gestión óptima de los componentes electrónicos que se deben mantener en inventario es clave para el éxito de cualquier desarrollo de un plan de mantenimiento. Una mala planeación en la adquisición de elementos de repuesto y piezas puede llevar a un almacenamiento con altos costos y con tiempos de inactividad de equipos que pueden resultar costosos.
    
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-primario.pt-4.px-4.pb-0.caja_flotante_azul(data-aos="fade-left")
          .row
            .col-sm-12
              p.px-3.pt-1.pb-2(data-aos="fade-left") Estos elementos deben estar disponibles cuando se necesiten, pero tampoco se deben adquirir de forma desmedida, aquí es donde resulta necesario apoyarse en los <em>software</em> para gestión del mantenimiento.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
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
