const CreateEvent = require ("../models/model_create_event");

async function getEvent(req, res) {
    let getCreateEvent = await CreateEvent.getEvent();
    console.log(getCreateEvent);
    res.send(getCreateEvent);
  }

  async function getEventById(req, res) {
    try {
      const eventId = req.params.id;
      const event = await CreateEvent.getEventById(eventId);
      if (event) {
        console.log("Event found:", event);
        res.send(event);
      } else {
        console.log("Event not found");
        res.send("Event not found");
      }
    } catch (error) {
      console.error(error);
      res.render("error");
    }
  }

async function createEvent(req, res) {
  try {
    let addCreateEvent = await CreateEvent.addEvent(req.body);
    res.send("Added successfully");
  } catch (error) {
    res.render("error");
  }
}

async function deleteEvent(req, res) {
    try {
      const eventId = req.params.id;
      const deleteEvent = await CreateEvent.deleteEvent(eventId);
      if (deleteEvent) {
        console.log("Event deleted successfully");
        res.send("Event deleted successfully");
      } else {
        console.log("Event deletion failed");
        res.send("Event deletion failed");
      }
    } catch (error) {
      console.error(error);
      res.render("error");
    }
  }

  async function updateEvent(req, res) {
    try {
      const eventId = req.params.id;
      const eventData = req.body;
      const updateEvent = await CreateEvent.updateEvent(eventId, eventData);
      if (updateEvent) {
        console.log("Event updated successfully");
        res.send("Event updated successfully");
      } else {
        console.log("Event update failed");
        res.send("Event update failed");
      }
    } catch (error) {
      console.error(error);
      res.render("error");
    }
  }

module.exports = {getEvent, getEventById, createEvent, deleteEvent, updateEvent}