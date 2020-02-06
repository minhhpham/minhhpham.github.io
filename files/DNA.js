/* JS to insert DNA animation code */
// html code to insert
var html = `
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
  <dna>
    <column>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
    </column>
    <column>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
      <dash></dash>
    </column>
    <column>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="orange">A</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="red">C</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="black">G</font></dot>
      <dot><font color="green">T</font></dot>
      <dot><font color="green">T</font></dot>
    </column>
  </dna>
`

// insert to all class=DNA
var articles = document.getElementsByClassName('DNA');
[].slice.call( articles ).forEach(function ( article ) {
    article.innerHTML = html;
});
