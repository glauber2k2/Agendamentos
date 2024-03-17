import { FunctionComponent } from 'react'

interface CardFlagProps {
  numeroCartao: string // Número completo do cartão
}

const obterBandeira = (primeiroDigito: string): string => {
  switch (primeiroDigito) {
    case '3':
      return 'american'
    case '4':
      return 'visa'
    case '2':
    case '5':
      return 'mastercard'
    case '6':
      return 'elo'
    default:
      return 'desconhecida'
  }
}

const CardFlag: FunctionComponent<CardFlagProps> = ({
  numeroCartao = 'default',
}) => {
  const primeiroDigito = numeroCartao.charAt(0)
  const bandeira = obterBandeira(primeiroDigito)

  const bandeiraSvgMap: Record<string, JSX.Element> = {
    visa: (
      <svg viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" />
        <path
          d="M25.7516 27.4332H21.8901L24.3054 13.4325H28.1667L25.7516 27.4332Z"
          fill="#15195A"
        />
        <path
          d="M39.7499 13.7748C38.9882 13.4915 37.7802 13.1787 36.2865 13.1787C32.4731 13.1787 29.7878 15.0851 29.7713 17.8106C29.7396 19.8215 31.6939 20.9384 33.1556 21.6089C34.6495 22.2941 35.1574 22.7413 35.1574 23.352C35.1422 24.29 33.9502 24.7223 32.8384 24.7223C31.2967 24.7223 30.4707 24.4994 29.2153 23.9776L28.7069 23.7539L28.1665 26.8967C29.0722 27.2835 30.7408 27.6268 32.4731 27.6419C36.5249 27.6419 39.1627 25.765 39.1939 22.8605C39.2093 21.2667 38.1774 20.0454 35.9526 19.0475C34.602 18.4069 33.7749 17.9749 33.7749 17.3195C33.7908 16.7236 34.4745 16.1133 35.9991 16.1133C37.2544 16.0834 38.1768 16.3663 38.8755 16.6494L39.2247 16.7981L39.7499 13.7748V13.7748V13.7748Z"
          fill="#15195A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.6618 13.4325H49.6486L52.7639 27.433H49.1885C49.1885 27.433 48.8386 25.8244 48.7278 25.3328H43.7699C43.6266 25.705 42.9595 27.433 42.9595 27.433H38.9078L44.6435 14.5941C45.0409 13.6855 45.7407 13.4325 46.6618 13.4325ZM46.4238 18.556C46.4238 18.556 45.2001 21.6689 44.8821 22.4732H48.0918C47.933 21.7733 47.2017 18.4219 47.2017 18.4219L46.9319 17.2156C46.8182 17.5262 46.6539 17.9533 46.543 18.2414C46.4679 18.4366 46.4173 18.568 46.4238 18.556Z"
          fill="#15195A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.1589 13.4325H11.3716C12.2138 13.462 12.8971 13.7152 13.1194 14.6094L14.4696 21.0422C14.4697 21.0426 14.4699 21.043 14.47 21.0434L14.8832 22.9796L18.6649 13.4325H22.7481L16.6785 27.4184H12.5951L9.15337 15.253C7.96587 14.6021 6.6106 14.0786 5.09534 13.7154L5.1589 13.4325Z"
          fill="#15195A"
        />
      </svg>
    ),
    mastercard: (
      <svg viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" />
        <path
          d="M34.3102 28.9765H23.9591V10.5122H34.3102V28.9765Z"
          fill="#FF5F00"
        />
        <path
          d="M24.6223 19.7429C24.6223 15.9973 26.3891 12.6608 29.1406 10.5107C27.1285 8.93843 24.5892 7.99998 21.8294 7.99998C15.2961 7.99998 10 13.2574 10 19.7429C10 26.2283 15.2961 31.4857 21.8294 31.4857C24.5892 31.4857 27.1285 30.5473 29.1406 28.975C26.3891 26.8249 24.6223 23.4884 24.6223 19.7429"
          fill="#EB001B"
        />
        <path
          d="M48.2706 19.7429C48.2706 26.2283 42.9745 31.4857 36.4412 31.4857C33.6814 31.4857 31.1421 30.5473 29.1293 28.975C31.8815 26.8249 33.6483 23.4884 33.6483 19.7429C33.6483 15.9973 31.8815 12.6608 29.1293 10.5107C31.1421 8.93843 33.6814 7.99998 36.4412 7.99998C42.9745 7.99998 48.2706 13.2574 48.2706 19.7429"
          fill="#F79E1B"
        />
      </svg>
    ),
    elo: (
      <svg viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" />
        <path
          d="M12.207 15.0056C12.7492 14.828 13.3292 14.7316 13.9327 14.7316C16.5666 14.7316 18.7636 16.5648 19.2676 19L23 18.2543C22.1436 14.1155 18.4099 11 13.9327 11C12.9077 11 11.921 11.1636 11 11.465L12.207 15.0056Z"
          fill="#FFF200"
        />
        <path
          d="M7.76523 27L10 24.1179C9.00246 23.1101 8.37286 21.6388 8.37286 19.9988C8.37286 18.3601 9.00188 16.8888 9.99912 15.8818L7.76318 13C6.06816 14.7122 5 17.2132 5 19.9988C5 22.7859 6.06972 25.2878 7.76523 27"
          fill="#00A4E0"
        />
        <path
          d="M19.2688 21C18.7631 23.4348 16.5674 25.2657 13.9359 25.2657C13.3321 25.2657 12.751 25.169 12.2087 24.9909L11 28.5333C11.9225 28.8362 12.9094 29 13.9359 29C18.409 29 22.1402 25.8866 23 21.7494L19.2688 21Z"
          fill="#EF4123"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.9576 13V23.2425L42.7978 23.9792L41.9272 25.9994L40.1074 25.2688C39.6982 25.0974 39.4213 24.8363 39.2109 24.5414C39.0089 24.2396 38.8591 23.8272 38.8591 23.2707V13H40.9576ZM27.0007 20.6125C27.0464 17.6835 29.5438 15.3454 32.5742 15.3902C35.1462 15.4292 37.2773 17.1692 37.837 19.4835L27.8893 23.59C27.3114 22.7367 26.983 21.7103 27.0007 20.6125ZM29.2768 21.0232C29.2632 20.9003 29.2535 20.7743 29.2572 20.6471C29.2857 18.9214 30.756 17.5444 32.5414 17.573C33.5133 17.5855 34.3762 18.0154 34.9595 18.6806L29.2768 21.0232ZM34.7501 22.9248C34.1505 23.488 33.3375 23.8312 32.4398 23.8189C31.8245 23.809 31.2544 23.631 30.7696 23.3346L29.5679 25.184C30.3909 25.6865 31.3613 25.9838 32.4075 25.9994C33.9304 26.0213 35.3184 25.4435 36.3277 24.4894L34.7501 22.9248ZM48.6164 17.573C48.258 17.573 47.9135 17.6289 47.5916 17.7333L46.8755 15.6608C47.4221 15.4846 48.0073 15.3888 48.6164 15.3888C51.2743 15.3888 53.4916 17.2124 54 19.6347L51.7834 20.0711C51.4847 18.6455 50.1803 17.573 48.6164 17.573ZM44.977 24.6683L46.4748 23.0325C45.8059 22.4605 45.3846 21.6251 45.3846 20.6939C45.3846 19.7637 45.8059 18.9288 46.4742 18.3572L44.9753 16.7213C43.839 17.6933 43.1231 19.1135 43.1231 20.6939C43.1231 22.2763 43.8396 23.696 44.977 24.6683ZM48.6164 23.8161C50.1788 23.8161 51.483 22.7444 51.7834 21.3209L53.9994 21.7592C53.4885 24.1789 51.2719 26 48.6164 26C48.0068 26 47.4208 25.9039 46.8728 25.7268L47.5906 23.6551C47.913 23.7592 48.2577 23.8161 48.6164 23.8161Z"
          fill="#000000"
        />
      </svg>
    ),
    american: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#002663"
          fill-rule="evenodd"
          d="M4.31351102,11.9651322 L3.49408345,9.96838176 L2.67933919,11.9651322 L4.31351102,11.9651322 Z M12.1730058,14.1264026 L12.1684736,10.2036046 L10.4324776,14.1264026 L9.38130189,14.1264026 L7.64077369,10.2001299 L7.64077369,14.1264026 L5.20575645,14.1264026 L4.74573489,13.0092074 L2.25300723,13.0092074 L1.78830236,14.1264026 L0.488004966,14.1264026 L2.63190183,9.11768179 L4.41065186,9.11768179 L6.44683267,13.8599073 L6.44683267,9.11768179 L8.40082901,9.11768179 L9.96762165,12.5154962 L11.4069075,9.11768179 L13.4001832,9.11768179 L13.4001832,14.1264026 L12.1730058,14.1264026 Z M15.3055732,13.1015049 L15.3055732,12.104716 L17.9339657,12.104716 L17.9339657,11.0825466 L15.3055732,11.0825466 L15.3055732,10.171719 L18.3071194,10.171719 L19.6166324,11.6317021 L18.2491069,13.1015049 L15.3055732,13.1015049 Z M23.4171068,14.1455801 L21.8614469,14.1455801 L20.3872629,12.4870853 L18.8552174,14.1455801 L14.1129918,14.1455801 L14.1129918,9.13565077 L18.9281863,9.13565077 L20.4011617,10.7778295 L21.9239917,9.13565077 L23.488005,9.13565077 L21.1613628,11.6406155 L23.4171068,14.1455801 Z"
        />
      </svg>
    ),
    desconhecida: <div />,
    // Adicione mais bandeiras conforme necessário
  }

  // Verifique se a bandeira é reconhecida e retorne o SVG correspondente
  const bandeiraSvg = bandeiraSvgMap[bandeira.toLowerCase()] || null

  return <div className="w-12 object-cover h-6">{bandeiraSvg}</div>
}

export default CardFlag
