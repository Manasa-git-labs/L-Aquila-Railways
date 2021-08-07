package it.univaq.sose.train.ticket.model;

public class TrainModel {

	private int trainId;

	private int trainNo;
	
	private String trainName;

	private int capacity;

	public TrainModel(int trainId, int trainNo, String trainName, int capacity) {
		super();
		this.trainId = trainId;
		this.trainNo = trainNo;
		this.setTrainName(trainName);
		this.capacity = capacity;
	}

	public int getTrainId() {
		return trainId;
	}

	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}

	public int getTrainNo() {
		return trainNo;
	}

	public void setTrainNo(int trainNo) {
		this.trainNo = trainNo;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

}
