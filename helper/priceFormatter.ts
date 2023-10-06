export const formatPrice = (price:number)=>{
    const formattedPrice = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
      }).format(price);
      
      return formattedPrice
}