import "./Cards.css"

import { Card } from "../Card/Card";

export function Cards() {
  const json_data = [
    {
      id: 1,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 2,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 3,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 4,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 5,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 6,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 7,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
    {
      id: 8,
      title: "Louis XVI ATHOS",
      prise: 165000,
      img: "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",

      Inform: [
        {
          id: 2,
          title: "Louis XVI ATHOS",
          "title-info":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, inventore eveniet, doloribus temporibus nam earum recusandae ea alias, dignissimos consequuntur quisquam voluptatibus ut! Suscipit obcaecati eveniet quasi iure? Ad.",
          imgUrl:
            "https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8TIYSNItzYMhFcoRLQujgjrIQo3LfdH0QTAzPZq8umzdocdLds7dWpW5gkV7SpEwG~447yhNPnYY-IuoXcSg57F2zJ3Z3aRe96484C~v5a2U0CZSHHGtBZecDQ8sOyTPiCd2LFGuJz~0x~94Lk0RNy2iDX~BBF65jiI9Gqg8UXUhgWvHm2wSLaVrIDLteraxhlmX~l-~GS0LlFVbK2B9WHQsLMbkwMSCWJuVB~jRKM66DvDYALX6Lza~YRipWbttlTbIqwNcq9FkHPx26Ojryh76ocvQ-TjkqqqAS262yBtOwXrXCRIEmDJqd4-CKqLbve12JCIQIb~iul2tDeOYA__",
          imgUrl2:
            "https://image.made-in-china.com/2f0j00TnElhWBSnpky/Missfox-Women-s-Watches-Chronograph-Rose-Gold-Sport-Watch-Ladies-Diamond-Blue-Rubber-Band-Xfcs-Analog-Female-Quartz-Wristwatch.webp",
          imgUrl3:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUai1sEMG5g6q1Qp8xqKTwZ1oTxPT4Tn_xA&s",

          prise: 165000,
        },
      ],
    },
  ];

  return (
    <section id="cards">
      <div className="container">
        <h1>новые поступления</h1>
      <div className="cards_wrapper">
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
        <Card title="Louis XVI ATHOS" price="165 000"/>
      </div>
      </div>
    </section>
  );
};
