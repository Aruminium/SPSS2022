package work1;

public class Product {
    private final String name;
    private final int price;

    public Product(final String name, final int price){
        this.name = name;
        this.price = price;
    }

    public double includeTax(){
        return price*1.10;
    }
}
