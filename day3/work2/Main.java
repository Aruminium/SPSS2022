package work2;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<IMember> members = new ArrayList<>();
        int price = 10000;
        members.add(new Platinum(price));
        members.add(new Gold(price));
        members.add(new Silver(price));
        members.add(new Bronze(price));

        for(IMember member: members){
            System.out.println(String.format("%s会員は%d円を%.0f円で買うことができます",member.getClass().getSimpleName(), price, member.priceCut()));
        }
    }

}
