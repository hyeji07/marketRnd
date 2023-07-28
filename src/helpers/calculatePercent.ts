export default function calculatePercent(
  regularPrice: number,
  discountedPrice: number
) {
  const discount = regularPrice - discountedPrice; //정상가에서 할인된금액을 빼서 얼만큼 할인되었는지 금액을 구한다.
  const percent = (discount / regularPrice) * 100; //toFixed:소수점자리제외/할인된금액의 %구하기/.toFixed(0) 는 소수점을 반올림해서 안되고 아래 Math.floor로 진행

  return Math.floor(percent);
}
