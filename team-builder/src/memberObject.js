class memberObject {
	constructor(data = {}) {
		this.id = data.id || Math.floor(Math.random() * 1000);
		this.name = data.name || "";
		this.email = data.email || "";
		this.role = data.role || "frontend";
	}
}

export default memberObject;
