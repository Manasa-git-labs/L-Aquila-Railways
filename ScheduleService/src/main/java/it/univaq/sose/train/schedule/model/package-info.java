@XmlJavaTypeAdapters({
        @XmlJavaTypeAdapter(type=LocalTime.class, value=LocalTimeAdapter.class)
})
package it.univaq.sose.train.schedule.model;

import java.time.LocalTime;
import it.univaq.sose.train.schedule.adapters.LocalTimeAdapter;

import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapters;

