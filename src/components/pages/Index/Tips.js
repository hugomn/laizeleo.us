import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { useIntl } from "react-intl";

const Tips = () => {
  const intl = useIntl();
  return (
    <FixedContainer>
      <MainTitle title="index.tips.title" subtitle="index.tips.subtitle" />
      <Subtitle mb={5}>
        {intl.locale === "pt" ? (
          <span>
            <h3>Hospedagem:</h3>
            <br />
            <strong>HOTEIS:</strong>
            <br />
            Para melhor conforto de todos, listamos abaixo alguns hoteis bem avaliados e com boa localização. Mas
            Curitiba tem uma ampla rede e opções diversas disponíveis em plataformas como o{" "}
            <a href="https://www.booking.com">Booking.com</a>. Sugerimos a reserva o quanto antes, por ser um feriado
            que, em geral, tem bastante procura na cidade. Contem com a gente se precisarem se ajuda!
            <br />
            <br />
            1. <strong>Moov Hotel:</strong>
            <br />
            - Nota Booking: 8,9
            <br />-{" "}
            <a href="https://www.booking.com/Share-8hGZ4r9" target="_blank" rel="noopener noreferrer">
              Link Booking
            </a>
            <br />
            <br />
            2. <strong>Go Inn:</strong>
            <br />
            - Nota Booking: 8,8
            <br />-{" "}
            <a href="https://www.booking.com/Share-zDWhYQ" target="_blank" rel="noopener noreferrer">
              Link Booking
            </a>
            <br />
            <br />
            3. <strong>Hotel Centro Europeu:</strong>
            <br />
            - Nota Booking: 8,6
            <br />-{" "}
            <a href="https://www.booking.com/Share-xxNkTeL" target="_blank" rel="noopener noreferrer">
              Link Booking
            </a>
            <br />
            <br />
            4. <strong>Rio Hotel by Bourbon Curitiba:</strong>
            <br />
            - Nota Booking: 8,6
            <br />-{" "}
            <a href="https://www.booking.com/Share-xftv2s" target="_blank" rel="noopener noreferrer">
              Link Booking
            </a>
            <br />
            <br />
            <strong>AIRBNB:</strong>
            <br />
            Pra quem preferir aproveitar a oportunidade pra reunir a galera, selecionamos também algumas opções de
            Airbnb que aceitam mais de 16 pessoas:
            <br />
            <br />
            1. <strong>Casarão Cubano:</strong>
            <br />
            - Nota Airbnb: 4,94
            <br />
            - Total hóspedes: 25 camas
            <br />
            - Preço médio diária por pessoa (a confirmar com proprietário): R$85 (R$6.356 de 01 a 04/05, sem impostos)
            <br />
            - Comentários: boa localização, bem central, perto do Largo da Ordem, 4 quartos, 4 banheiros.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/ucxOdyus" target="_blank" rel="noopener noreferrer">
              Link Airbnb
            </a>
            <br />
            <br />
            2. <strong>Casa Beira Rio:</strong>
            <br />
            - Nota Airbnb: 5,0
            <br />
            - Total hóspedes: 20
            <br />
            - Preço médio diária por pessoa (a confirmar com proprietário): R$95 (R$5.716 de 01 a 04/05, sem impostos)
            <br />
            - Comentários: não é tão central, mas tem mais espaço, mais quartos, e uma boa área pra churrasco.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/oOPx6WdY" target="_blank" rel="noopener noreferrer">
              Link Airbnb
            </a>
            <br />
            <br />
            3. <strong>Chácara Recanto Tuiuiú:</strong>
            <br />
            - Nota Airbnb: 5,0
            <br />
            - Total hóspedes: 24
            <br />
            - Preço médio diária por pessoa (a confirmar com proprietário): R$59 (R$4.228 de 01 a 04/05, sem impostos)
            <br />
            - Comentários: é muito perto do local da festa, dá pra ir a pé, região bem tranquila! Mas aí fica mais longe
            dos pontos turísticos da cidade.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/oRokAMQC" target="_blank" rel="noopener noreferrer">
              Link Airbnb
            </a>
            <br />
            <br />
            4. <strong>Casa em Seminário:</strong>
            <br />
            - Nota Airbnb: 4,91
            <br />
            - Total hóspedes: 24
            <br />
            - Preço médio diária por pessoa (a confirmar com proprietário): R$138 (R$9.928 de 01 a 04/05, sem impostos)
            <br />
            - Comentários: é bem localizada, fica no bairro da casa dos noivos! Bem espaçosa, 8 quartos. Porém é mais
            cara que as outras, ainda assim mais barato que hotel.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/NyGRfWCQ" target="_blank" rel="noopener noreferrer">
              Link Airbnb
            </a>
            <br />
            <br />
            Além destas opções, Curitiba conta com uma vasta variedade hoteleira e locações por temporada. Fique à
            vontade para encontrar a opção que mais se adequa às suas necessidades. Caso necessitem de ajuda, não
            hesitem em nos procurar.
            <br />
            <br />
            <h3>Onde se arrumar:</h3>
            <br />
            <br />
            Algumas dicas de profissionais de make e penteado pra quem se interessar:
            <br />
            <br />
            <strong>MAQUIAGEM:</strong>
            <br />
            Locais sem necessidade de agendamento:
            <br />
            - Fast Escova | @fastescova.seminario | (41) 99640-6400
            <br />
            - Fast Escova | @fastescova.bigorrilho | (41) 98806-9782
            <br />
            - Fast Escova | @fastescova.cwbjuveve | (41) 99255-5422
            <br />
            <br />
            Locais com necessidade de agendamento:
            <br />
            - Housi Beauty | @housibeauty | via direct
            <br />
            - Tais Guerini | @taisguerinimakeup | (41) 99553-7483
            <br />
            - Mariana Ramos | @marianaramosmakeup | (41) 99734-0011
            <br />
            - Melissa Campano | @melissacampano_makeup | (41) 99116-4526
            <br />
            - Natália Matos | @nataliamatosmake | (41) 99979-5182
            <br />
            - Camila Cunha | @camilacunhamakeup | (41) 99791-6137
            <br />
            - Malu Martins | @malumartinsmakeup | (41) 98763-6642
            <br />
            <br />
            <strong>PENTEADO:</strong>
            <br />
            - Cris França | @crisfranca_penteados | (41) 99837-4318
            <br />
            - Camila Siqueira | @camilasiqueirapenteados | (41) 99759-2353
            <br />
            - Roberta Andrade | @eu.robertaandrade | (41) 98852-9969
            <br />
            - Emanuel Antunes | @emanuellantunes | (41) 99600-4972
            <br />
            - Fernanda Lopes | @nandalopespenteados | (41) 99882-7013
            <br />
            - Fran Carvalho | @francarvalhohairstyle | (41) 98503-1156
            <br />- Juliana Mondadori | @julianamondadori | (41) 99663-7028
          </span>
        ) : (
          <span>
            <h3>Accommodation:</h3>
            <br />
            <strong>HOTELS:</strong>
            <br />
            For everyone's convenience, we have listed some highly-rated hotels with good locations below. However,
            Curitiba offers a wide range of accommodations available on platforms like{" "}
            <a href="https://www.booking.com">Booking.com</a>. We recommend booking as soon as possible, as it is a
            holiday period with typically high demand in the city. Feel free to reach out to us if you need any
            assistance!
            <br />
            <br />
            1. <strong>Moov Hotel:</strong>
            <br />
            - Booking Rating: 8.9
            <br />-{" "}
            <a href="https://www.booking.com/Share-8hGZ4r9" target="_blank">
              Booking Link
            </a>
            <br />
            <br />
            2. <strong>Go Inn:</strong>
            <br />
            - Booking Rating: 8.8
            <br />-{" "}
            <a href="https://www.booking.com/Share-zDWhYQ" target="_blank">
              Booking Link
            </a>
            <br />
            <br />
            3. <strong>Hotel Centro Europeu:</strong>
            <br />
            - Booking Rating: 8.6
            <br />-{" "}
            <a href="https://www.booking.com/Share-xxNkTeL" target="_blank">
              Booking Link
            </a>
            <br />
            <br />
            4. <strong>Rio Hotel by Bourbon Curitiba:</strong>
            <br />
            - Booking Rating: 8.6
            <br />-{" "}
            <a href="https://www.booking.com/Share-xftv2s" target="_blank">
              Booking Link
            </a>
            <br />
            <br />
            <strong>AIRBNB:</strong>
            <br />
            For those who prefer to take the opportunity to gather the group, we’ve also selected some Airbnb options
            that can accommodate more than 16 people:
            <br />
            <br />
            1. <strong>Casarão Cubano:</strong>
            <br />
            - Airbnb Rating: 4.94
            <br />
            - Total guests: 25 beds
            <br />
            - Average daily price per person (to confirm with the owner): R$85 (R$6,356 from 01 to 04/05, excluding
            taxes)
            <br />
            - Comments: Great location, very central, near Largo da Ordem, 4 bedrooms, 4 bathrooms.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/ucxOdyus" target="_blank">
              Airbnb Link
            </a>
            <br />
            <br />
            2. <strong>Casa Beira Rio:</strong>
            <br />
            - Airbnb Rating: 5.0
            <br />
            - Total guests: 20
            <br />
            - Average daily price per person (to confirm with the owner): R$95 (R$5,716 from 01 to 04/05, excluding
            taxes)
            <br />
            - Comments: Not as central, but offers more space, more rooms, and a great area for a barbecue.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/oOPx6WdY" target="_blank">
              Airbnb Link
            </a>
            <br />
            <br />
            3. <strong>Chácara Recanto Tuiuiú:</strong>
            <br />
            - Airbnb Rating: 5.0
            <br />
            - Total guests: 24
            <br />
            - Average daily price per person (to confirm with the owner): R$59 (R$4,228 from 01 to 04/05, excluding
            taxes)
            <br />
            - Comments: Very close to the event location, you can walk there; very quiet area! However, it’s farther
            from the city’s tourist spots.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/oRokAMQC" target="_blank">
              Airbnb Link
            </a>
            <br />
            <br />
            4. <strong>Casa em Seminário:</strong>
            <br />
            - Airbnb Rating: 4.91
            <br />
            - Total guests: 24
            <br />
            - Average daily price per person (to confirm with the owner): R$138 (R$9,928 from 01 to 04/05, excluding
            taxes)
            <br />
            - Comments: Well located, in the neighborhood where the bride and groom live! Very spacious, 8 bedrooms.
            However, it’s more expensive than the others, still cheaper than a hotel.
            <br />-{" "}
            <a href="https://www.airbnb.com/slink/NyGRfWCQ" target="_blank">
              Airbnb Link
            </a>
            <br />
            <br />
            Besides these options, Curitiba offers a wide variety of hotels and vacation rentals. Feel free to choose
            the option that best suits your needs. If you need help, don’t hesitate to reach out to us.
            <br />
            <br />
            <h3>Where to get ready:</h3>
            <br />
            <br />
            Here are some tips for makeup and hairstyling professionals for those interested:
            <br />
            <br />
            <strong>MAKEUP:</strong>
            <br />
            Places that don’t require appointments:
            <br />
            - Fast Escova | @fastescova.seminario | (41) 99640-6400
            <br />
            - Fast Escova | @fastescova.bigorrilho | (41) 98806-9782
            <br />
            - Fast Escova | @fastescova.cwbjuveve | (41) 99255-5422
            <br />
            <br />
            Places that require appointments:
            <br />
            - Housi Beauty | @housibeauty | via direct
            <br />
            - Tais Guerini | @taisguerinimakeup | (41) 99553-7483
            <br />
            - Mariana Ramos | @marianaramosmakeup | (41) 99734-0011
            <br />
            - Melissa Campano | @melissacampano_makeup | (41) 99116-4526
            <br />
            - Natália Matos | @nataliamatosmake | (41) 99979-5182
            <br />
            - Camila Cunha | @camilacunhamakeup | (41) 99791-6137
            <br />
            - Malu Martins | @malumartinsmakeup | (41) 98763-6642
            <br />
            <br />
            <strong>HAIRSTYLING:</strong>
            <br />
            - Cris França | @crisfranca_penteados | (41) 99837-4318
            <br />
            - Camila Siqueira | @camilasiqueirapenteados | (41) 99759-2353
            <br />
            - Roberta Andrade | @eu.robertaandrade | (41) 98852-9969
            <br />
            - Emanuel Antunes | @emanuellantunes | (41) 99600-4972
            <br />
            - Fernanda Lopes | @nandalopespenteados | (41) 99882-7013
            <br />
            - Fran Carvalho | @francarvalhohairstyle | (41) 98503-1156
            <br />- Juliana Mondadori | @julianamondadori | (41) 99663-7028
          </span>
        )}
      </Subtitle>
    </FixedContainer>
  );
};

export default Tips;
