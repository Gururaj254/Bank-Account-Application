package com.Guru.BankingApp.repository;

import com.Guru.BankingApp.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account , Long> {

}
