/*
 * @Author: your name
 * @Date: 2021-07-11 12:42:58
 * @LastEditTime: 2021-07-11 23:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /notes/java/demo.java
 */
public class Object {
  public static void main(String[] args) {
    Cat a = new Cat();
    System.out.println("name:" + a.name + " age:" 
    + a.age + " color: " + a.color + " gao: " + a.gao);
  }
}
class Cat {
  String name;
  int age;
  int[] gao;
  String color;
}