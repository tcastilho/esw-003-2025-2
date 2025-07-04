package br.com.pecepoli.demo.controller;

import br.com.pecepoli.demo.domain.Localidade;
import br.com.pecepoli.demo.service.LocalidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class LocalidadeController {
    @Autowired
    private final LocalidadeService localidadeService;

    public LocalidadeController(LocalidadeService localidadeService) {this.localidadeService = localidadeService;}

    @RequestMapping(method = RequestMethod.GET, value ="/localidades")
    public ResponseEntity<List<Localidade>> obterTodos(@RequestParam(name =  "q", required = false) String criteria, Pageable pageable) {
        Page<Localidade> localidades = this.localidadeService.obterLocalidades(criteria, pageable);

        return ResponseEntity
                .ok()
                .header("Access-Control-Allow-Headers", "*")
                .header("X-Total-Count", String.valueOf(localidades.getTotalElements()))
                .body(localidades.toList());
    }

    @RequestMapping(method = RequestMethod.GET, value = "/localidades/{id}")
    public ResponseEntity<Localidade> obterLocalidade(@PathVariable UUID id) {
        Optional<Localidade> localidade = this.localidadeService.obterLocalidade(id);
        return localidade.map((x ) -> ResponseEntity.ok(x))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
