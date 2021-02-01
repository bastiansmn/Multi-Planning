package fr.bastian.multiplanningapi.controllers;

import fr.bastian.multiplanningapi.models.Event;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.List;

@RestController
public class EventController {

   private List<Event> events = List.of(new Event("Acheter frites", 31, 01, 2021, 19, 45, 80, "#"+Integer.toHexString(Color.BLUE.getRGB()).substring(2)),
                                        new Event("Chercher pain", 29, 01, 2021, 14, 20, 120),
                                        new Event("Badminton", 27, 01, 2021, 17, 30, 180, "#"+Integer.toHexString(Color.RED.getRGB()).substring(2))
                                        );

   @GetMapping("/api/events")
   public List<Event> getEvents(/* @RequestParam(value = "day") String day */) {
      // TODO : Get the events of a certain week in the param
      return events;
   }
}
