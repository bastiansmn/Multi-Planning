package fr.bastian.multiplanningapi.models;

import java.awt.*;
import java.util.UUID;

public class Event {

   private final UUID ID;
   private final UUID belongTo;

   private String name;
   private String color;

   private int day;
   private int month;
   private int year;

   private int hour;
   private int minute;

   private int duration;

   public Event(UUID belongTo , String name, int day, int month, int year, int hour, int minute, int duration) {

      // TODO : Generate UUID if not in DB
      this.ID = UUID.randomUUID();
      this.belongTo = belongTo;

      this.color = "#"+Integer.toHexString(Color.CYAN.getRGB()).substring(2);
      this.name = name;

      this.day = day;
      this.month = month;
      this.year = year;

      this.hour = hour;
      this.minute = minute;
      this.duration = duration;
   }

   public Event(UUID belongTo , String name, int day, int month, int year, int hour, int minute, int duration, String color) {

      // TODO : Generate UUID if not in DB
      this.ID = UUID.randomUUID();
      this.belongTo = belongTo;

      this.color = color;
      this.name = name;

      this.day = day;
      this.month = month;
      this.year = year;

      this.hour = hour;
      this.minute = minute;
      this.duration = duration;
   }

   public UUID getID() {
      return ID;
   }

   public int getDay() {
      return day;
   }

   public int getHour() {
      return hour;
   }

   public int getMinute() {
      return minute;
   }

   public int getMonth() {
      return month;
   }

   public int getYear() {
      return year;
   }

   public String getColor() {
      return color;
   }

   public String getName() {
      return name;
   }

   public int getDuration() {
      return duration;
   }
}
