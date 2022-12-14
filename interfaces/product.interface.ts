export interface ProductModel {
	id: number;
	name: string;
	neo_reference_id: string;
	absolute_magnitude_h: string;
	is_potentially_hazardous_asteroid: boolean;
	estimated_diameter: EstimatedDiameter;
	close_approach_data: CloseApproachData[];
}

export interface EstimatedDiameter {
	kilometers: Kilometers;
	meters: Meters;
	miles: Miles;
	feet: Feet;
}

export interface Kilometers {
	estimated_diameter_min: number;
	estimated_diameter_max: number;
}

export interface Meters {
	estimated_diameter_min: number;
	estimated_diameter_max: number;
}

export interface Miles {
	estimated_diameter_min: number;
	estimated_diameter_max: number;
}

export interface Feet {
	estimated_diameter_min: number;
	estimated_diameter_max: number;
}

export interface CloseApproachData {
	close_approach_date: string;
	close_approach_date_full: string;
	epoch_date_close_approach: number;
	relative_velocity: RelativeVelocity;
	miss_distance: MissDistance;
	orbiting_body: string;
}

export interface RelativeVelocity {
	kilometers_per_second: string;
	kilometers_per_hour: string;
	miles_per_hour: string;
}

export interface MissDistance {
	astronomical: string;
	lunar: number;
	kilometers: number;
	miles: string;
}
