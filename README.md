# nodeApp
Basic Node app using express &amp; Mongo Db



# Mongoose Commands to query the MongoDB
	//To get all the data from DB
	1. ModelName.find( callback ).limit(limit);   
	2. ModelName.findById( id , callback);

	//To post data in DB 
	3. ModelName.create(data , callback);
	
	// To put the data in DB depending upon the query Condition
	4. ModelName.findOneAndUpdate( query , updateObject ,  options ,callback ); 
	
	// To delete the row from the table		
	5. ModelName.remove( query , callback)
  
