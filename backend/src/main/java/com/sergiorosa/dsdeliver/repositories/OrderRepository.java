package com.sergiorosa.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sergiorosa.dsdeliver.entities.Order;

public interface OrderRepository  extends JpaRepository<Order, Long>{

}
