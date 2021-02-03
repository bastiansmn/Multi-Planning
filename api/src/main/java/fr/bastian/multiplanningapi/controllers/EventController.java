package fr.bastian.multiplanningapi.controllers;

import fr.bastian.multiplanningapi.models.Event;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
public class EventController {

   private final UUID USERID = UUID.randomUUID();

   private List<Event> events = List.of(new Event(USERID, "Sport", 1, 2, 2021, 19, 45, 80, "#" + Integer.toHexString(Color.RED.getRGB()).substring(2)),
                                        new Event(USERID, "Acheter frites", 3, 2, 2021, 19, 45, 80, "#" + Integer.toHexString(Color.BLUE.getRGB()).substring(2)),
                                        new Event(USERID, "Chercher pain", 1, 2, 2021, 11, 20, 30, "#" + Integer.toHexString(Color.RED.getRGB()).substring(2)),
                                        new Event(USERID, "Faire les courses", 1, 2, 2021, 13, 10, 60, "#" + Integer.toHexString(Color.YELLOW.getRGB()).substring(2)),
                                        new Event(USERID, "Appeler Maman", 1, 2, 2021, 14, 30, 40),
                                        new Event(USERID, "Badminton", 7, 2, 2021, 17, 30, 180, "#" + Integer.toHexString(Color.RED.getRGB()).substring(2)),
                                        new Event(USERID, "Sport", 8, 2, 2021, 19, 45, 80, "#" + Integer.toHexString(Color.BLUE.getRGB()).substring(2)),
                                        new Event(USERID, "Acheter frites", 11, 2, 2021, 19, 45, 80, "#" + Integer.toHexString(Color.BLUE.getRGB()).substring(2)),
                                        new Event(USERID, "Chercher pain", 9, 2, 2021, 13, 20, 30, "#" + Integer.toHexString(Color.RED.getRGB()).substring(2)),
                                        new Event(USERID, "Faire les courses", 13, 2, 2021, 14, 10, 120, "#" + Integer.toHexString(Color.YELLOW.getRGB()).substring(2)),
                                        new Event(USERID, "Appeler Maman", 12, 2, 2021, 14, 30, 120),
                                        new Event(USERID, "Badminton", 11, 2, 2021, 14, 30, 180, "#" + Integer.toHexString(Color.RED.getRGB()).substring(2))
   );

   @GetMapping("/api/events")
   public List<Event> getEvents(@RequestParam(value = "date") String date) {
      return events.stream().filter(event -> (
         String.format("%02d", event.getDay()).equals(date.substring(0, 2)) &&
         String.format("%02d", event.getMonth()).equals(date.substring(3, 5)) &&
         String.format("%04d", event.getYear()).equals(date.substring(6))
      )).sorted((Event a, Event b) -> {
         if (a.getHour() < b.getHour())
            return -1;
         else if (a.getHour() == b.getHour())
            return Integer.compare(a.getMinute(), b.getMinute());
         else
            return 1;
      }).collect(Collectors.toList());
   }
}
