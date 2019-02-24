package com.kyj.myapp

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HomeController {
  @GetMapping("/test")
  fun test() = "test"
}