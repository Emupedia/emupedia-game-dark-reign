function AssemblyPlantBuilding(pos_x, pos_y, player)
{
	this._proto = AssemblyPlantBuilding;
	this.player = player;
	this.health = this._proto.health_max;
	
	this.init(pos_x, pos_y);
	this.setActionTime(this._proto.build_time);
	
	this.run = function()
	{
		switch (this.state)
		{
			case 'CONSTRUCTION':
				this._runStandartConstruction();
				break;
				
			case 'SELL':
				this._runStandartSell();
				break;
		}
	}
}

AbstractBuilding.setBuildingCommonOptions(AssemblyPlantBuilding);

AssemblyPlantBuilding.res_key = 'assembly_plant';
AssemblyPlantBuilding.obj_name = 'Assembly Plant';
AssemblyPlantBuilding.cost = 2200;
AssemblyPlantBuilding.sell_cost = 1100;
AssemblyPlantBuilding.health_max = 1200;
AssemblyPlantBuilding.build_time = 44;
AssemblyPlantBuilding.energy = 100;
AssemblyPlantBuilding.can_build = true;
AssemblyPlantBuilding.crater = 4;

AssemblyPlantBuilding.cell_size = {x: 5, y: 5};
AssemblyPlantBuilding.cell_matrix = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
AssemblyPlantBuilding.move_matrix = [0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0];
AssemblyPlantBuilding.cell_padding = {x: 2, y: 2};
AssemblyPlantBuilding.image_size = {x: 119, y: 117};
AssemblyPlantBuilding.image_padding = {x: -1, y: -3};
AssemblyPlantBuilding.shadow_image_size = {x: 104, y: 80};
AssemblyPlantBuilding.shadow_image_padding = {x: -16, y: -45};

AssemblyPlantBuilding.upgradable = true;