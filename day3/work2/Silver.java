package work2;

class Silver implements IMember {
    private static double DISCOUNT = 0.1;
    private final double totalAmount;

    public Silver(final double totalAmount){
        this.totalAmount = totalAmount;
    }

    @Override
    public double priceCut() {
        return totalAmount - totalAmount*DISCOUNT;
    }
}
