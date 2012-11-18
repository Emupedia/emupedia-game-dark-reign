function AssemblyPlantBuilding(pos_x, pos_y)
{
	this._proto = AssemblyPlantBuilding;
	this.health_max = 1500;
	this.construction_max = 1500;
	
	this.producing_queue = [];
	this.producing_start = 0;
	
	this.setPosition(pos_x, pos_y);
	
	this.run = function()
	{
		switch (this.state)
		{
			case 'CONSTRUCTION':
				this._runStandartConstruction();
				break;
				
			case 'PRODUCING':
				this.producing_queue[0].construction_progress += 1 / (50 * this.producing_queue[0].construction_time);
				if (this.producing_queue[0].construction_progress > 1)
				{
					var cell = this.getCell(), unit = AbstractUnit.createNew(this.producing_queue[0], cell.x + 2, cell.y + 2);
					//Find compatable point for exit
					unit.move(cell.x, cell.y + 5);
					
					this.producing_queue[0].construction_progress = 0;
					this.producing_queue[0].construction_queue--;
					this.producing_queue.shift();
					this.state = 'NORMAL';
				}
				break;
				
			case 'NORMAL':
				if (this.producing_queue.length > 0)
				{
					this.producing_start = (new Date).getTime();
					this.state = 'PRODUCING';
				}
				break;
		}
	}
	
	this.produce = function(obj)
	{
		this.producing_queue.push(obj);
	}
}

AssemblyPlantBuilding.prototype = new AbstractBuilding();

AssemblyPlantBuilding.box_image = 'assembly_plant_box.png';
AssemblyPlantBuilding.res_key = 'assembly_plant.png';
AssemblyPlantBuilding.obj_name = 'Assembly Plant';
AssemblyPlantBuilding.cost = 2200;
AssemblyPlantBuilding.energy = 100;
AssemblyPlantBuilding.enabled = false;
AssemblyPlantBuilding.count = 0;
AssemblyPlantBuilding.cell_size = {x: 5, y: 5};
AssemblyPlantBuilding.cell_matrix = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
AssemblyPlantBuilding.move_matrix = [0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0];
AssemblyPlantBuilding.cell_padding = {x: 2, y: 2};
AssemblyPlantBuilding.image_size = {x: 119, y: 117};
AssemblyPlantBuilding.image_padding = {x: -1, y: -3};
AssemblyPlantBuilding.require_building = [HeadquarterBuilding];

AssemblyPlantBuilding.loadResources = function(){
	game.resources.addImage(this.res_key, 'images/buildings/assembly_plant.png');
};