package work2;

public class Bronze implements IMember{
    private static double DISCOUNT = 0.05;
    private final double totalAmount;

    public Bronze(final double totalAmount){
        this.totalAmount = totalAmount;
    }

    @Override
    public double priceCut() {
        return totalAmount - totalAmount*DISCOUNT;
    }
}
