package fr.bastian.multiplanningapi.models;

import org.springframework.data.annotation.Id;

import java.util.UUID;

public class User {

   @Id
   private final UUID ID;

   private String name;
   private String lastname;

   public User(UUID id, String name, String lastname) {
      this.ID = id;
      this.name = name;
      this.lastname = lastname;
   }


   public String getName() {
      return name;
   }

   public String getLastname() {
      return lastname;
   }

   public UUID getID() {
      return ID;
   }
}
