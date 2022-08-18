package work2;

class Gold implements IMember{
    private static double DISCOUNT = 0.2;
    private final double totalAmount;

    public Gold(final double totalAmount){
        this.totalAmount = totalAmount;
    }

    @Override
    public double priceCut() {
        return totalAmount - totalAmount*DISCOUNT;
    }
}
