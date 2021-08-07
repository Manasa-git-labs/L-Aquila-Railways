package it.univaq.sose.train.ticket.adapters;


import java.time.LocalTime;

import javax.xml.bind.annotation.adapters.XmlAdapter;

public class LocalTimeAdapter extends XmlAdapter<String, LocalTime> {

	@Override
	public String marshal(LocalTime time) throws Exception {
		// TODO Auto-generated method stub
		return time.toString();
	}

	@Override
	public LocalTime unmarshal(String time) throws Exception {
		// TODO Auto-generated method stub
		return LocalTime.parse(time);
	}

}
