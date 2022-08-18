package work2;

public enum Grade {
    PLATINUM("Platinum"),
    GOLD("Gold"),
    SILVER("Silver");

    private final String grade;
    private Grade(final String grade){
        this.grade = grade;
    }

}
