package work1;

public class Price{
    private static double TAX_RATE = 0.10;
    private final int price;

    public Price(final int price) {
        this.price = price;
    }

    /**
     * 値段から税込み価格を計算する
     * @return {@link double} 税込み価格
     */
    public double includeTax(){
        return price + price*TAX_RATE;
    }
}