import styled from "styled-components";
import tw from "tailwind.macro";

export default {
  Header: styled.header`
    ${tw`lg:px-16 px-6 bg-red-600 flex flex-wrap items-center lg:py-0 py-2`}
  `,

  LogoContainer: styled.div`
    ${tw`flex-1 flex justify-between items-center`},
  `,

  BodyWrapper: styled.div`
    ${tw`mx-auto px-4 py-20 `}
  `,
  ListComp: styled.ul`
    ${tw`lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0`}
  `
};
