export class RoomProtocol {
  constructor({ id, name, scope}) {
    this.kind = "Room";
    this.id = id;
    this.name = name;
    this.scope = scope;
  }
}