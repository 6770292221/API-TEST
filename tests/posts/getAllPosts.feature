Feature: Get All Posts
@smoke
  Scenario: TC01: should return 200 OK
    When I send a GET request to "/posts"
    Then the response status should be 200

  Scenario: TC02: should return an array of posts
    When I send a GET request to "/posts"
    Then the response body should be an array

  Scenario: TC03: should return exactly 100 items
    When I send a GET request to "/posts"
    Then the response body should contain 100 items
