//숫자 세글자 앞에 , 콤마 붙여주는 함수
export default function formatNumberCommas(number: number): string {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
